const tf = require('@tensorflow/tfjs-node');
const { textClient, translateClient, MODEL_NAME } = require('./config');
const ImageService = require('./imageService');

const classLabels = ['biological', 'cardboard', 'clothes', 'glass', 'metal', 'paper', 'plastic', 'trash'];
const validScore = [0.99, 1];
const confidenceThreshold = 0.5;

class ModelService {
    static async loadModel() {
        const modelUrl = process.env.MODEL_URL;
        if (!modelUrl) {
            throw new Error('Model URL is not defined in environment variables');
        }
        // Load the model from the specified URL
        return await tf.loadLayersModel(modelUrl);
    }

    static async classifyImage(imageBuffer) {
        const image = await ImageService.loadImage(imageBuffer);
        const model = await this.loadModel();
        const predictions = await model.predict(image).array();
        model.dispose();

        return this.getClassification(predictions[0]);
    }

    static async getClassification(classificationArray) {
        const bestIndex = classificationArray.indexOf(Math.max(...classificationArray));
        const bestProbability = classificationArray[bestIndex];
        const resultLabel = classLabels[bestIndex];

        let explanation = '';
        let suggestion = '';

        // Use Google AI Studio for explanation and suggestion based on the label
        try {
            explanation = await this.generateText(`Provide 1 paragraph very brief explanation about ${resultLabel} waste`);
            suggestion = await this.generateText(`Provide very brief suggestions or possible steps to recycling ${resultLabel} waste`);
        } catch (error) {
            console.error('Error generating text from AI Studio:', error.message);
        }

        if (bestProbability >= validScore[0] || validScore[1]) {
            return {
                label: resultLabel,
                probability: bestProbability,
                message: `Classified as: ${resultLabel}`,
                explanation: explanation,
                suggestion: suggestion
            };
        } else if (bestProbability < confidenceThreshold) {
            return {
                label: 'unknown',
                probability: bestProbability,
                message: 'Image does not match any known classes',
                explanation: explanation,
                suggestion: suggestion
            };
        } else {
            return {
                label: resultLabel,
                probability: bestProbability,
                message: `Possible: ${resultLabel}`,
                explanation: explanation,
                suggestion: suggestion
            };
        }
    }

    static async generateText(prompt) {
        // Translate prompt to English
        const translatedPrompt = await this.translateText(prompt, 'en');

        // Generate text using AI Studio
        const [response] = await textClient.generateText({
            model: MODEL_NAME,
            prompt: {
                text: translatedPrompt,
            },
        });

        if (!response || !response.candidates || response.candidates.length === 0) {
            throw new Error('No response from text generation API');
        }

        let generatedText = response.candidates[0].output;

        // Remove bold markers and format the response
        generatedText = generatedText.replace(/\*\*/g, ''); // Remove all instances of **
        generatedText = generatedText.replace(/\* (.+?):/g, '$1:'); // Remove bullets

        // Translate the response back to the original language
        const originalLanguageResponse = await this.translateText(generatedText, 'id');
        return originalLanguageResponse;
    }

    static async translateText(text, targetLanguage) {
        const [response] = await translateClient.translateText({
            parent: `projects/${process.env.GCP_PROJECT_ID}/locations/global`,
            contents: [text],
            mimeType: 'text/plain',
            targetLanguageCode: targetLanguage,
        });
        return response.translations[0].translatedText;
    }
}

module.exports = ModelService;
