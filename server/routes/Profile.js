const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");
const multer = require("multer");

// Configure multer to store uploaded images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Create a new profile with profile picture upload
router.post("/profiles", upload.single("profilePicture"), async (req, res) => {
  try {
    const { userId, firstName, lastName, bio } = req.body;
    const profilePicture = req.file ? req.file.path : ""; // Get uploaded image path
    const newProfile = new Profile({
      userId,
      firstName,
      lastName,
      bio,
      profilePicture,
    });
    const savedProfile = await newProfile.save();
    res.json(savedProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get profile by user ID
router.get("/profiles/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const profile = await Profile.findOne({ userId });
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
