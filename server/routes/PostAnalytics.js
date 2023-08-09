const express = require("express");
const router = express.Router();
const PostAnalytics = require("../models/PostAnalytics");

// Create post analytics
router.post("/post-analytics", async (req, res) => {
  try {
    const { postId, views, likes, comments } = req.body;
    const newPostAnalytics = new PostAnalytics({
      postId,
      views,
      likes,
      comments,
    });
    const savedPostAnalytics = await newPostAnalytics.save();
    res.json(savedPostAnalytics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get post analytics by post ID
router.get("/post-analytics/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const postAnalytics = await PostAnalytics.findOne({ postId });
    res.json(postAnalytics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
