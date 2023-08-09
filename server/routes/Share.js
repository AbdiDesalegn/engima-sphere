const express = require("express");
const router = express.Router();
const Share = require("../models/Share");

// Create a new share entry
router.post("/shares", async (req, res) => {
  try {
    const { userId, postId } = req.body;
    const newShare = new Share({
      userId,
      postId,
    });
    const savedShare = await newShare.save();
    res.json(savedShare);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get shares by post ID
router.get("/shares/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const shares = await Share.find({ postId });
    res.json(shares);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
