const express = require('express');
const axios = require('axios');
const router = express.Router();

// API endpoint to search recipes
router.get('/', async (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: "Search query is required" });
    }

    try {
        // Make API request to Spoonacular
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
            params: {
                query: query,
                apiKey: process.env.d3371ebc14054a181164c8b43fa35, // Add your Spoonacular API key here
            },
        });

        // Return results from Spoonacular API
        const recipes = response.data.results;
        res.json(recipes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch recipes" });
    }
});

module.exports = router;
