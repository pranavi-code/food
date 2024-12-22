const express = require('express');
const Recipe = require('../models/Recipe');
const multer = require('multer'); // Import multer for file uploads
const adminMiddleware = require('../middleware/adminMiddleware.js');
const authMiddleware = require('../middleware/verifyToken');

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the upload folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Rename the file
    },
});
const upload = multer({ storage: storage });

// Add a new recipe (accessible to authenticated users)
router.post('/', authMiddleware, upload.single('image'), async (req, res) => {
    const { title, ingredients, instructions } = req.body;
    const imagePath = req.file ? req.file.path : null; // Get the uploaded file path

    // Validate request body
    if (!title || !ingredients || !instructions) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    try {
        const newRecipe = new Recipe({
            title,
            ingredients,
            instructions,
            image: imagePath, // Include image path
            createdBy: req.user._id, // Assuming req.user is set by auth middleware
        });

        await newRecipe.save();
        res.status(201).json({ message: 'Recipe added successfully!', recipe: newRecipe });
    } catch (error) {
        console.error('Error adding recipe:', error);
        res.status(500).json({ message: 'Server error!' });
    }
});

// Get all recipes (accessible to everyone)
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find().populate('createdBy', 'username'); // Populate the creator's username
        res.status(200).json(recipes);
    } catch (error) {
        console.error("Error fetching recipes:", error);
        res.status(500).json({ message: 'Server error!' });
    }
});

// Update a recipe (admin only)
router.put('/:id', adminMiddleware, async (req, res) => {
    const { id } = req.params;

    // Validate request body
    const { title, ingredients, instructions } = req.body;
    if (!title && !ingredients && !instructions) {
        return res.status(400).json({ message: 'At least one field is required for update!' });
    }

    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedRecipe) {
            return res.status(404).json({ message: 'Recipe not found!' });
        }
        res.status(200).json({ message: 'Recipe updated successfully!', recipe: updatedRecipe });
    } catch (error) {
        console.error("Error updating recipe:", error);
        res.status(500).json({ message: 'Server error!' });
    }
});

// Delete a recipe (admin only)
router.delete('/:id', adminMiddleware, async (req, res) => {
    const { id } = req.params;

    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(id);
        if (!deletedRecipe) {
            return res.status(404).json({ message: 'Recipe not found!' });
        }
        res.status(200).json({ message: 'Recipe deleted successfully!' });
    } catch (error) {
        console.error("Error deleting recipe:", error);
        res.status(500).json({ message: 'Server error!' });
    }
});

module.exports = router;
