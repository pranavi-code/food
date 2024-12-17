const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, default: "Pending" } // New feedback starts as "Pending"
});

module.exports = mongoose.model('Feedback', feedbackSchema);
