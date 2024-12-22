const jwt = require('jsonwebtoken');
const User = require('../models/User');  // Import User model
const verifyToken = require('./verifyToken');
const adminMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    // Check if token exists
    if (!token) {
        return res.status(403).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Decode the JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find the user from the decoded JWT token
        const user = await User.findById(decoded.userId);

        // Check if user is an admin
        if (!user || user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied. Admins only.' });
        }

        // Attach the user to the request object so that the route can access it
        req.user = user;
        next();  // Move to the next middleware/route handler
    } catch (error) {
        console.error('Error verifying token:', error);
        res.status(400).json({ message: 'Invalid token.' });
    }
};

module.exports = adminMiddleware;
