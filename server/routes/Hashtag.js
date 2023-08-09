const express = require("express");
const router = express.Router();
const Hashtag = require("./models/Hashtag");

// Create a new hashtag
router.post("/hashtags", async (req, res) => {
  try {
    const { name } = req.body;
    const newHashtag = new Hashtag({
      name,
    });
    const savedHashtag = await newHashtag.save();
    res.json(savedHashtag);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all hashtags
router.get("/hashtags", async (req, res) => {
  try {
    const hashtags = await Hashtag.find();
    res.json(hashtags);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
