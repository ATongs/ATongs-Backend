const ModelService = require('../services/ModelService');
const CustomError = require('../exceptions/CustomError');
const { Firestore } = require('@google-cloud/firestore');
const multer = require('multer');
const upload = multer();

const firestore = new Firestore();

async function savePrediction(id, data) {
    const documentRef = await firestore.collection('predictions-collection').doc(id).set(data);
    return documentRef.id;
}

exports.predict = upload.single('image');

exports.handlePredict = async (req, res) => {
    try {
        const data = req.file;
        if (!data) {
            throw new CustomError('Missing image file', 400);
        }

        const imageBuffer = data.buffer;

        const tensor = await ModelService.loadImage(imageBuffer);
        const model = await ModelService.loadModel();

        const prediction = model.predict(tensor);
        const predictionArray = prediction.arraySync()[0];

        const top3Predictions = ModelService.getTop3Predictions(predictionArray);
        const id = crypto.randomUUID();
        const createdAt = new Date().toISOString();

        const predictionData = {
            id: id,
            result: top3Predictions,
            createdAt: createdAt
        };

        await savePrediction(id, predictionData);

        const response = {
            status: 'success',
            message: 'Model is predicted successfully',
            data: {
                ...predictionData
            }
        };

        return res.status(200).json(response);
    } catch (err) {
        console.error(err);
        return res.status(err.statusCode || 500).json(CustomError.handle(err));
    }
};