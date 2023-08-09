const express = require("express");
const router = express.Router();
const ExploreContent = require("./models/ExploreContent");

// Create a new explore content entry
router.post("/explore-content", async (req, res) => {
  try {
    const { postId, category } = req.body;
    const newExploreContent = new ExploreContent({
      postId,
      category,
    });
    const savedExploreContent = await newExploreContent.save();
    res.json(savedExploreContent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get explore content by category
router.get("/explore/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const exploreContent = await ExploreContent.find({ category });
    res.json(exploreContent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
