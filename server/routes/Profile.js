const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");

// Create a new profile
router.post("/profiles", async (req, res) => {
  try {
    const { userId, firstName, lastName, bio } = req.body;
    const newProfile = new Profile({
      userId,
      firstName,
      lastName,
      bio,
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
