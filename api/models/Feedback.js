const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, default: 'Pending' },
  },
  { timestamps: true } // Automatically adds `createdAt` and `updatedAt` fields
);

module.exports = mongoose.model('Feedback', feedbackSchema);
