const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const register = async(req,res)=>{
    try {
        const existingUser = await User.findOne({ 
            $or: [
                { username: req.body.username },
                { email: req.body.email }
            ]
        });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role || 'user'
        });
        
        await newUser.save();
        
        res.status(201).json({
            message: "User registered successfully",
            user: {
                username: newUser.username,
                email: newUser.email,
                role: newUser.role
            }
        });
    } catch(err) {
        console.error('Registration error:', err);
        res.status(500).json({message: "Internal server error", error: err.message});
    }
};

const login = async(req,res)=>{ 
    try {
        const { username, password } = req.body;
        console.log("Login attempt for:", username); // Debug log

        const user = await User.findOne({ username });
        
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Use the comparePassword method from the User model
        const isValid = await user.comparePassword(password);
        console.log("Password validation result:", isValid); // Debug log

        if (!isValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { 
                userId: user._id,
                username: user.username,
                role: user.role 
            },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
    } catch(err) {
        console.error('Login error:', err);
        res.status(500).json({message: "Internal server error", error: err.message});
    }
};

module.exports = { register, login }; 