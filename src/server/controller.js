const ModelService = require('../services/ModelService');
const CustomError = require('../exceptions/CustomError');
const { Firestore } = require('@google-cloud/firestore');
const { Storage } = require('@google-cloud/storage');
const multer = require('multer');
const upload = multer();
const crypto = require('crypto');
const classifyCollectionName = 'classifications-collection';


const firestore = new Firestore();
const storage = new Storage();

async function saveClassification(id, data, imageUrl) {
    const documentRef = await firestore.collection(classifyCollectionName).doc(id).set({ ...data, imageUrl });
    return documentRef.id;
}

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
            const tensor = await ModelService.loadImage(imageBuffer);
            const model = await ModelService.loadModel();
            const classification = model.predict(tensor);
            const classificationArray = classification.arraySync()[0];
            const topClassifications = ModelService.getClassification(classificationArray);
            const id = crypto.randomUUID();
            const createdAt = new Date().toISOString();

            const classificationData = {
                id: id,
                result: topClassifications,
                createdAt: createdAt
            };

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

exports.handleClassifyHistories = async (req, res) => {
    try {
        const classificationsSnapshot = await firestore.collection(classifyCollectionName).get();
        const classifications = [];

        classificationsSnapshot.forEach(doc => {
            const data = doc.data();
            classifications.push({
                ...data,
                imageUrl: data.imageUrl
            });
        });

        const response = {
            status: 'success',
            message: 'Classification histories fetched successfully',
            data: classifications
        };

        return res.status(200).json(response);
    } catch (err) {
        console.error(err);
        return res.status(err.statusCode || 500).json(CustomError.handle(err));
    }
};