import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import User from './models/user.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://OmNandurkar:9881954344@mongodb.mmqhprc.mongodb.net/nutribites");
        console.log('Database Connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

connectDB();

const PORT = process.env.PORT || 5000;

app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "Server is up and running",
        data : null
    })

});


// import User from "./models/User.js"


app.post("/user", async (req, res) => {
  const { email, userName, userPhoto } = req.body;

  try {

    let existingUser = await User.findOne({ email });

    if (existingUser) {

      existingUser.isLoggedIn = true;
      await existingUser.save();

      res.json({
        success: true,
        message: "User logged in successfully",
        data: existingUser
      });
    } else {

      const newUser = await User.create({
        email,
        userName,
        userPhoto,
        isLoggedIn: true
      });

      res.json({
        success: true,
        message: "New user created and logged in successfully",
        data: newUser
      });
    }
  } catch (error) {
    console.error("Error creating or updating user:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null
    });
  }
});


app.get("/user", async (req, res) => {
  try {

    const users = await User.find();

    res.json({
      success: true,
      message: "Users fetched successfully",
      data: users
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null
    });
  }
});

// Logout Api


app.post("/user/logout", async (req, res) => {
    const { email } = req.body;
  
    try {
  
      let user = await User.findOne({ email });
  
      if (user) {
  
        user.isLoggedIn = false;
        await user.save();
  
        res.json({
          success: true,
          message: "User logged out successfully",
          data: user
        });
      } else {
        res.status(404).json({
          success: false,
          message: "User not found",
          data: null
        });
      }
    } catch (error) {
      console.error("Error logging out user:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
        data: null
      });
    }
  });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});