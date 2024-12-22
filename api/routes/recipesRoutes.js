const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// Endpoint to add a new recipe
router.post('/recipes', async (req, res) => {
  const { name, ingredients, steps, category, submittedBy } = req.body;

  try {
    const newRecipe = new Recipe({ name, ingredients, steps, category, submittedBy });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
