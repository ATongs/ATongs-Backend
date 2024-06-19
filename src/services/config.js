require('dotenv').config();
const { TranslationServiceClient } = require('@google-cloud/translate').v3beta1;
const { TextServiceClient } = require('@google-ai/generativelanguage').v1beta2;
const { GoogleAuth } = require('google-auth-library');

const MODEL_NAME = 'models/text-bison-001';
const API_KEY = process.env.GOOGLE_API_KEY; // Deployed Environment
// const API_KEY = 'REDACTED'; // Local environment

if (!API_KEY) {
    throw new Error('API Key is missing. Please set the GOOGLE_API_KEY in your .env file.');
}

const textClient = new TextServiceClient({
    authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const translateClient = new TranslationServiceClient();

module.exports = { textClient, translateClient, MODEL_NAME };
