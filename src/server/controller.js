const ModelService = require('../services/ModelService');
const CustomError = require('../exceptions/CustomError');
const { Firestore } = require('@google-cloud/firestore');
const multer = require('multer');
const upload = multer();
const classifyCollectionName = 'classifications-collection';

const firestore = new Firestore();

async function saveClassification(id, data) {
    const documentRef = await firestore.collection(classifyCollectionName).doc(id).set(data);
    return documentRef.id;
}

exports.classify = upload.single('image');

exports.handleClassify = async (req, res) => {
    try {
        const data = req.file;
        if (!data) {
            throw new CustomError('Missing image file', 400);
        }

        const imageBuffer = data.buffer;

        const tensor = await ModelService.loadImage(imageBuffer);
        const model = await ModelService.loadModel();

        const classification = model.predict(tensor);
        const classificationArray = classification.arraySync()[0];

        const top3Classifications = ModelService.getTop3Classifications(classificationArray);
        const id = crypto.randomUUID();
        const createdAt = new Date().toISOString();

        const classificationData = {
            id: id,
            result: top3Classifications,
            createdAt: createdAt
        };

        await saveClassification(id, classificationData);

        const response = {
            status: 'success',
            message: 'Model is classified successfully',
            data: {
                ...classificationData
            }
        };

        return res.status(200).json(response);
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
            classifications.push(doc.data());
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
