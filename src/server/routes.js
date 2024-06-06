const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/predict', controller.predict, controller.handlePredict);

module.exports = router;
