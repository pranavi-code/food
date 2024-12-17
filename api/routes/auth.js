const express = require('express');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const validator = require('validator');

const router = express.Router();

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extract token from Authorization header
    if (!token) {
        return res.status(403).json({ message: 'Token is required!' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token!' });
        }
        req.user = decoded; // Store decoded user info in request for use in other routes
        next();
    });
};

// User Registration Route
router.post('/register', async (req, res) => {
    const { username, email, password, role } = req.body;

    // Validate email format
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: 'Invalid email address!' });
    }

    try {
        // Check if email already exists
        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use!' });
        }

        // If role is not passed, default to 'user'
        const newUser = new User({
            username,
            email,
            password,
            role: role || 'user'  // Default to 'user' if role is not provided
        });

        // Hash the password before saving
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: 'Server error!' });
    }
});

// User Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials! (User not found)' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials! (Password mismatch)' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({
            message: user.role === 'admin' ? 'Admin login successful' : 'User login successful',
            token,
            userRole: user.role,
        });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: 'Server error!' });
    }
});

// Fetch User Details Route
router.get('/me', verifyToken, async (req, res) => {
    try {
        // Fetch the user details using the user ID from the token
        const user = await User.findById(req.user.userId).select('-password'); // Exclude password from response
        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }
        res.json(user); // Send user details back to client
    } catch (error) {
        console.error("Error fetching user details:", error);
        res.status(500).json({ message: 'Server error!' });
    }
});

module.exports = router;
