const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

// Create a new comment
router.post("/comments", async (req, res) => {
  try {
    const { postId, userId, content } = req.body;
    const newComment = new Comment({
      postId,
      userId,
      content,
    });
    const savedComment = await newComment.save();
    res.json(savedComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get comments for a specific post
router.get("/comments/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const comments = await Comment.find({ postId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
