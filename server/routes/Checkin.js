const express = require("express");
const router = express.Router();
const Checkin = require("./models/Checkin");

// Create a new check-in
router.post("/checkins", async (req, res) => {
  try {
    const { userId, location, timestamp } = req.body;
    const newCheckin = new Checkin({
      userId,
      location,
      timestamp,
    });
    const savedCheckin = await newCheckin.save();
    res.json(savedCheckin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all check-ins for a user
router.get("/checkins/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const checkins = await Checkin.find({ userId });
    res.json(checkins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
