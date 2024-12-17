const jwt = require('jsonwebtoken');
const User = require('../models/User');

const verifyToken = async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Get the token
    if (!token) {
        return res.status(403).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        const user = await User.findById(decoded.userId).select('-password'); // Fetch user

        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }

        req.user = user; // Attach user to request
        next(); // Proceed
    } catch (error) {
        console.error('Error verifying token:', error);
        res.status(400).json({ message: 'Invalid token.' });
    }
};

module.exports = verifyToken;
