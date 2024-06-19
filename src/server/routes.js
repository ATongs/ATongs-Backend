const express = require('express');
const router = express.Router();
const controller = require('./controller');

// (GET) Welcome API
router.get('/', controller.welcome);

// (POST) Classify
router.post('/classify', controller.classify, controller.handleClassify);

// (GET) Classification Histories
router.get('/classify/histories', controller.handleClassifyHistories);

// (GET) Filtered Classification Histories
router.get('/classify/histories/filter', controller.handleClassifyHistories);

module.exports = router;
