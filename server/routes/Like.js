const express = require("express");
const router = express.Router();
const Like = require("./models/Like");

// Create a new like
router.post("/likes", async (req, res) => {
  try {
    const { postId, userId } = req.body;
    const newLike = new Like({
      postId,
      userId,
    });
    const savedLike = await newLike.save();
    res.json(savedLike);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get likes for a specific post
router.get("/likes/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const likes = await Like.find({ postId });
    res.json(likes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
