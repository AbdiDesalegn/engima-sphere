const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Create a new post
router.post("/posts", async (req, res) => {
  try {
    const { userId, content, imageUrl } = req.body;
    const newPost = new Post({
      userId,
      content,
      imageUrl,
    });
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get posts by user ID
router.get("/posts/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const posts = await Post.find({ userId });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
