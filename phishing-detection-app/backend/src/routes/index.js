const express = require('express');
const router = express.Router();
const { submitUrl, getUrlResults } = require('../controllers/index');

// Route for submitting a URL for phishing detection
router.post('/submit', submitUrl);

// Route for retrieving results of a submitted URL
router.get('/results/:id', getUrlResults);

module.exports = router;