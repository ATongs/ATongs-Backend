const tf = require('@tensorflow/tfjs-node');
const classLabels = ['biological', 'cardboard', 'clothes', 'glass', 'metal', 'paper', 'plastic', 'trash'];
const validScore = [0.99, 1];

class ModelService {
    static async loadImage(imageBuffer) {
        // Decode the image, resize it and normalize the pixel values to be between 0 and 1
        const image = tf.node.decodeImage(imageBuffer)
            .resizeNearestNeighbor([224, 224])
            .div(tf.scalar(255))
            .expandDims();
        return image;
    }

    static async loadModel() {
        const modelUrl = process.env.MODEL_URL;
        if (!modelUrl) {
            throw new Error('Model URL is not defined in environment variables');
        }
        // Load the model from the specified URL
        return await tf.loadLayersModel(modelUrl);
    }

    static getBestClassification(classificationArray) {
        const bestIndex = classificationArray.indexOf(Math.max(...classificationArray));
        const bestProbability = classificationArray[bestIndex];
        const bestLabel = classLabels[bestIndex];

        // Best Prediction
        if (bestProbability >= validScore[0] || validScore[1]) {
            return {
                label: bestLabel,
                probability: bestProbability,
                message: `Valid: ${bestLabel} ${validScore[1] * 100 + '%'}`
            };
        }
        // To predict as best as possible
        else {
            return {
                label: bestLabel,
                probability: bestProbability,
                message: `Possible: ${bestLabel}`
            };
        }
    }

}

module.exports = ModelService;
