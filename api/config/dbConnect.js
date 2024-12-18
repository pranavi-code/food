const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI || process.env.CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        console.log(`MongoDB connected: ${connect.connection.host}`);
        return connect;
    } catch (err) {
        console.error('MongoDB connection error:', err);
        throw err;
    }
};

module.exports = dbConnect;