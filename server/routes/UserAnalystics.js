const express = require("express");
const router = express.Router();
const UserAnalytics = require("./models/UserAnalytics");

// Create user analytics
router.post("/user-analytics", async (req, res) => {
  try {
    const { userId, followers, following, posts } = req.body;
    const newUserAnalytics = new UserAnalytics({
      userId,
      followers,
      following,
      posts,
    });
    const savedUserAnalytics = await newUserAnalytics.save();
    res.json(savedUserAnalytics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user analytics by user ID
router.get("/user-analytics/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const userAnalytics = await UserAnalytics.findOne({ userId });
    res.json(userAnalytics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
