const express = require('express');
const adminMiddleware = require('../middleware/adminMiddleware');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require("bcryptjs");
const Feedback = require('../models/Feedback');

// Admin Dashboard Route
router.get('/dashboard', adminMiddleware, (req, res) => {
    res.status(200).json({ message: 'Welcome to the admin dashboard!', user: req.user });
});

router.get("/api/admin/total-feedback", async (req, res) => {
    try {
      const feedbackCount = await Feedback.countDocuments(); // Count feedback documents
      res.json({ totalFeedback: feedbackCount });
    } catch (error) {
      console.error("Error fetching total feedback:", error);
      res.status(500).json({ message: "Error fetching total feedback count" });
    }
  });

// Fetch Total Users
router.get('/total-users', async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        res.status(200).json({ totalUsers });
    } catch (error) {
        console.error("Error fetching total users:", error);
        res.status(500).json({ message: "Server error!" });
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
s
        res.status(200).json({ message: `User with ID ${userId} deleted successfully!` });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: 'Server error!' });
    }
});
router.post("/cp", async (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ error: "Username and password are required" });
    }
  
    try {
      // Find the user by username
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      // Hash the new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Update the user's password
      user.password = hashedPassword;
      await user.save();
  
      return res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
      console.error("Error updating password:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

module.exports = router;
