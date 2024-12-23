const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assuming you're using Mongoose for User model

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1]; // Get token from Bearer header

    if (!token) {
      return res.status(401).json({ message: 'No token provided.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Decode token using secret
    req.user = await User.findById(decoded.userId); // Attach user to request object

    if (!req.user) {
      return res.status(401).json({ message: 'User not found.' });
    }

    next(); // Proceed to the next middleware or route
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Unauthorized access.' });
  }
};

module.exports = authenticate;
