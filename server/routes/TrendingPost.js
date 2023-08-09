const express = require("express");
const router = express.Router();
const TrendingPost = require("../models/TrendingPost");

// Create a new trending post
router.post("/trending-posts", async (req, res) => {
  try {
    const { postId, score } = req.body;
    const newTrendingPost = new TrendingPost({
      postId,
      score,
    });
    const savedTrendingPost = await newTrendingPost.save();
    res.json(savedTrendingPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all trending posts
router.get("/trending-posts", async (req, res) => {
  try {
    const trendingPosts = await TrendingPost.find();
    res.json(trendingPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
