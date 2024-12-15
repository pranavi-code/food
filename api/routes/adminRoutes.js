const express = require('express');
const adminMiddleware = require('../middleware/adminMiddleware');
const User = require('../models/User');
const router = express.Router();

// Admin Dashboard Route
router.get('/dashboard', adminMiddleware, (req, res) => {
    res.status(200).json({ message: 'Welcome to the admin dashboard!', user: req.user });
});



// Fetch Total Users
router.get('/total-users', adminMiddleware, async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        res.status(200).json({ totalUsers });
    } catch (error) {
        console.error("Error fetching total users:", error);
        res.status(500).json({ message: 'Server error!' });
    }
});

// Delete User Route
router.delete('/delete-user/:id', adminMiddleware, async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndDelete(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }

        res.status(200).json({ message: `User with ID ${userId} deleted successfully!` });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: 'Server error!' });
    }
});

module.exports = router;
