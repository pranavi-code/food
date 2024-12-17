const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/adminRoutes'); // Include admin routes
const recipeRoutes = require('./routes/recipes');
const feedbackRoutes = require('./routes/feedbackRoutes'); // Feedback routes
const verifyToken = require('./middleware/verifyToken'); // Import verifyToken from the correct path

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes); // Admin routes
app.use('/api/recipes', recipeRoutes);
app.use('/api/feedback', feedbackRoutes); // Feedback route setup

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
