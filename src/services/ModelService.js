const tf = require('@tensorflow/tfjs-node');
const classLabels = ['battery', 'biological', 'brown-glass', 'cardboard', 'clothes', 'green-glass', 'metal', 'paper', 'plastic', 'shoes', 'trash', 'white-glass'];

class ModelService {
    static async loadImage(imageBuffer) {
        return tf.node.decodeImage(imageBuffer)
            .resizeNearestNeighbor([224, 224])
            .toFloat()
            .expandDims();
    }

    static async loadModel() {
        const modelUrl = process.env.MODEL_URL;
        if (!modelUrl) {
            throw new Error('Model URL is not defined in environment variables');
        }
        return await tf.loadLayersModel(modelUrl);
    }

    static getTop3Classifications(classificationArray) {
        const top3Indices = Array.from(classificationArray)
            .map((probability, index) => ({ probability, index }))
            .sort((a, b) => b.probability - a.probability)
            .slice(0, 3)
            .map(item => item.index);

        return top3Indices.map(index => ({
            label: classLabels[index],
            probability: classificationArray[index]
        }));
    }
}

module.exports = ModelService;
