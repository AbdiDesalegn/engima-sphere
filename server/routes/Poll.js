const express = require("express");
const router = express.Router();
const Poll = require("../models/Poll");

// Create a new poll
router.post("/polls", async (req, res) => {
  try {
    const { question, options } = req.body;
    const newPoll = new Poll({
      question,
      options,
    });
    const savedPoll = await newPoll.save();
    res.json(savedPoll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all polls
router.get("/polls", async (req, res) => {
  try {
    const polls = await Poll.find();
    res.json(polls);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
