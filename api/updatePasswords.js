const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// User model
const User = require('./models/User');  // Adjust this path based on your project structure

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("Connected to MongoDB");

    // Fetch all users
    const users = await User.find();  // Find all users in the users collection

    for (const user of users) {
      // Check if the password is already hashed
      if (user.password && !user.password.startsWith('$2a$')) {  // If the password is not hashed
        const hashedPassword = await bcrypt.hash(user.password, 10);

        // Update password to hashed version
        user.password = hashedPassword;

        await user.save();
        console.log(`Password for user ${user.username} updated successfully`);
      }
    }

    console.log("All user passwords updated");
    mongoose.disconnect();
  })
  .catch(err => {
    console.error("Error connecting to MongoDB:", err);
    mongoose.disconnect();
  });
