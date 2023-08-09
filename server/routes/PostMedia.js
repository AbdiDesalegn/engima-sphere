const express = require("express");
const router = express.Router();
const PostMedia = require("./models/PostMedia");

// Upload post media
router.post("/post-media", async (req, res) => {
  try {
    // Assuming you're using multer or a similar package for file uploads
    // Make sure to configure the middleware for handling file uploads
    const { postId, mediaUrl } = req.body;
    const newPostMedia = new PostMedia({
      postId,
      mediaUrl,
    });
    const savedPostMedia = await newPostMedia.save();
    res.json(savedPostMedia);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get post media by post ID
router.get("/post-media/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const postMedia = await PostMedia.find({ postId });
    res.json(postMedia);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
