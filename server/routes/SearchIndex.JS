const express = require("express");
const router = express.Router();
const SearchIndex = require("./models/SearchIndex");

// Create a new search index entry
router.post("/search-index", async (req, res) => {
  try {
    const { keyword, postId } = req.body;
    const newSearchIndex = new SearchIndex({
      keyword,
      postId,
    });
    const savedSearchIndex = await newSearchIndex.save();
    res.json(savedSearchIndex);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Search posts by keyword
router.get("/search/:keyword", async (req, res) => {
  try {
    const keyword = req.params.keyword;
    const searchResults = await SearchIndex.find({ keyword });
    res.json(searchResults);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
