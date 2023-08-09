const express = require("express");
const router = express.Router();
const AdvancedSearchIndex = require('../models/AdvancedSearchIndex');


// Create a new advanced search index entry
router.post("/advanced-search", async (req, res) => {
  try {
    const { keyword, result } = req.body;
    const newSearchIndex = new AdvancedSearchIndex({
      keyword,
      result,
    });
    const savedSearchIndex = await newSearchIndex.save();
    res.json(savedSearchIndex);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all advanced search index entries
router.get("/advanced-search", async (req, res) => {
  try {
    const searchIndexEntries = await AdvancedSearchIndex.find();
    res.json(searchIndexEntries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
