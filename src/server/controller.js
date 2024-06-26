const ModelService = require('../services/modelService');
const ImageService = require('../services/imageService');
const CustomError = require('../exceptions/CustomError');
const { Firestore } = require('@google-cloud/firestore');
const { Storage } = require('@google-cloud/storage');
const multer = require('multer');
const upload = multer();
const crypto = require('crypto');
const classifyCollectionName = 'classifications-collection';
const moment = require('moment');

const firestore = new Firestore();
const storage = new Storage();

async function saveClassification(id, data, imageUrl) {
    const documentRef = await firestore.collection(classifyCollectionName).doc(id).set({
        ...data,
        imageUrl
    });
    return documentRef.id;
}

exports.welcome = async (req, res) => {
    const welcomeMessage = "Welcome to the ATongs API!";
    return res.status(200).json({ message: welcomeMessage });
};

exports.classify = upload.single('image');

exports.handleClassify = async (req, res) => {
    try {
        const data = req.file;
        if (!data) {
            throw new CustomError('Missing image file', 400);
        }

        // Upload the image to GCS
        const bucketName = process.env.BUCKET_IMAGES;
        const blob = storage.bucket(bucketName).file(`images/${crypto.randomUUID()}.jpg`);
        const blobStream = blob.createWriteStream({
            resumable: false,
        });

        blobStream.on('error', err => {
            throw new CustomError(err.message, 500);
        });

        blobStream.on('finish', async () => {
            const publicUrl = `https://storage.googleapis.com/${bucketName}/${blob.name}`;

            const imageBuffer = data.buffer;
            const tensor = await ImageService.loadImage(imageBuffer);
            const model = await ModelService.loadModel();
            const classification = model.predict(tensor);
            const classificationArray = classification.arraySync()[0];

            // Get top classifications asynchronously
            const topClassifications = await ModelService.getClassification(classificationArray);

            const id = crypto.randomUUID();
            const createdAt = new Date().toISOString();

            /*
            Replace unwanted newlines with space in explanation and suggestion
            const cleanExplanation = topClassifications.explanation.replace(/\n/g, ' ');
            const cleanSuggestion = topClassifications.suggestion.replace(/\n/g, ' ');
            */

            const classificationData = {
                id,
                createdAt,
                result: topClassifications
                /* 
                result: {
                    label: topClassifications.label,
                    probability: topClassifications.probability,
                    message: `Classified as: ${topClassifications.label}`,
                    explanation: cleanExplanation,
                    suggestion: cleanSuggestion
                }, 
                */

            };

            // Logging to verify classificationData
            console.log('Classification Data:', classificationData);

            await saveClassification(id, classificationData, publicUrl);

            const response = {
                status: 'success',
                message: 'Model is classified successfully',
                data: {
                    ...classificationData
                }
            };

            return res.status(200).json(response);
        });

        blobStream.end(data.buffer);
    } catch (err) {
        console.error(err);
        return res.status(err.statusCode || 500).json(CustomError.handle(err));
    }
};

// Function to filter classification histories by date range
function filterClassifyHistoriesByDateRange(histories, range) {
    const today = moment().startOf('day');
    let startDate;

    switch (range) {
        case 'today':
            startDate = today;
            break;
        case 'yesterday':
            startDate = moment().subtract(1, 'day').startOf('day');
            break;
        case 'week':
            startDate = moment().startOf('week');
            break;
        case 'month':
            startDate = moment().startOf('month');
            break;
        default:
            startDate = null;
    }

    if (startDate) {
        return histories.filter(history => moment(history.createdAt).isSameOrAfter(startDate));
    } else {
        return histories;
    }
}

exports.handleClassifyHistories = async (req, res) => {
    try {
        const classificationsSnapshot = await firestore.collection(classifyCollectionName).get();
        const classifications = [];

        classificationsSnapshot.forEach(doc => {
            const data = doc.data();
            let parsedResult;
            try {
                parsedResult = JSON.parse(data.result);
            } catch (error) {
                parsedResult = data.result;
            }

            const orderedResult = {
                label: parsedResult.label || "",
                probability: parsedResult.probability || 0,
                message: parsedResult.message || "",
                explanation: parsedResult.explanation || "",
                suggestion: parsedResult.suggestion || ""
            };

            const formattedClassification = {
                id: doc.id,
                createdAt: data.createdAt || "",
                imageUrl: data.imageUrl || "",
                result: orderedResult
            };

            classifications.push(formattedClassification);
        });

        // Handle filtering based on range parameter
        const range = req.query.range || 'all'; // Default to 'all' if range not specified
        const filteredClassifications = filterClassifyHistoriesByDateRange(classifications, range);

        const response = {
            status: 'success',
            message: 'Classification histories fetched successfully',
            data: filteredClassifications
        };

        return res.status(200).json(response);
    } catch (err) {
        console.error('Error fetching classification histories:', err.message);
        return res.status(500).json({
            status: 'error',
            message: 'Failed to fetch classification histories',
            error: err.message
        });
    }
};
