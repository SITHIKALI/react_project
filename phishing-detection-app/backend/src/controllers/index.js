const Url = require('../models/Url');
const aiModelService = require('../services/aiModel');

// Handle URL submission
exports.submitUrl = async (req, res) => {
    const { url } = req.body;

    try {
        // Process the URL with the AI model
        const result = await aiModelService.processUrl(url);

        // Save the URL and result to the database
        const newUrl = new Url({
            url,
            result,
            createdAt: new Date()
        });
        await newUrl.save();

        res.status(200).json({ message: 'URL processed successfully', result });
    } catch (error) {
        res.status(500).json({ message: 'Error processing URL', error: error.message });
    }
};

// Get all submitted URLs
exports.getUrls = async (req, res) => {
    try {
        const urls = await Url.find();
        res.status(200).json(urls);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching URLs', error: error.message });
    }
};