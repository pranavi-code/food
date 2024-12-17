const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback'); // Feedback model import

// POST feedback
router.post('/submit', async (req, res) => {
    const { name, email, message } = req.body;

    // Validate input data
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const feedback = new Feedback({ name, email, message, status: "Pending" });
        await feedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
        console.error('Error submitting feedback:', error);
        res.status(500).json({ message: 'Error submitting feedback', error: error.message });
    }
});

// GET all feedback
router.get('/', async (req, res) => {
    try {
        const feedbacks = await Feedback.find(); // Fetch all feedbacks
        res.status(200).json(feedbacks);
    } catch (error) {
        console.error('Error fetching feedback:', error);
        res.status(500).json({ message: 'Error fetching feedback', error: error.message });
    }
});


// DELETE feedback
router.delete('/api/feedback/:id', async (req, res) => {
  try {
    const feedback = await Feedback.findByIdAndDelete(req.params.id);
    if (!feedback) {
      return res.status(404).send('Feedback not found');
    }
    res.status(200).send('Feedback deleted successfully');
  } catch (error) {
    res.status(500).send('Error deleting feedback: ' + error.message);
  }
});

module.exports = router;

// PUT - Mark feedback as resolved
router.put('/:id/resolve', async (req, res) => {
    const feedbackId = req.params.id;

    try {
        const resolvedFeedback = await Feedback.findByIdAndUpdate(
            feedbackId,
            { status: "Resolved" },
            { new: true }
        );

        if (!resolvedFeedback) {
            return res.status(404).json({ message: 'Feedback not found.' });
        }

        res.status(200).json(resolvedFeedback);
    } catch (error) {
        console.error('Error marking feedback as resolved:', error);
        res.status(500).json({ message: 'Failed to mark feedback as resolved.', error: error.message });
    }
});

module.exports = router;
