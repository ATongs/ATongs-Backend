const express = require('express');
const router = express.Router();
const controller = require('./controller');

// (POST) Classify
router.post('/classify', controller.classify, controller.handleClassify);
// (GET) Classification Histories
router.get('/classify/histories', controller.handleClassifyHistories);

module.exports = router;
