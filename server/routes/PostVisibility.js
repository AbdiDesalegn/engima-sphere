const express = require("express");
const router = express.Router();
const PostVisibility = require("./models/PostVisibility");

// Create a new post visibility entry
router.post("/post-visibility", async (req, res) => {
  try {
    const { postId, userId, visibilityType } = req.body;
    const newPostVisibility = new PostVisibility({
      postId,
      userId,
      visibilityType,
    });
    const savedPostVisibility = await newPostVisibility.save();
    res.json(savedPostVisibility);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get visibility of a post for a user
router.get("/post-visibility/:postId/:userId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.params.userId;
    const postVisibility = await PostVisibility.findOne({ postId, userId });
    res.json(postVisibility);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
