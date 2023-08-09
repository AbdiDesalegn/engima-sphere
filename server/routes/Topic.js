const express = require("express");
const router = express.Router();
const Topic = require("../models/Topic");

// Create a new topic
router.post("/topics", async (req, res) => {
  try {
    const { name, description } = req.body;
    const newTopic = new Topic({
      name,
      description,
    });
    const savedTopic = await newTopic.save();
    res.json(savedTopic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all topics
router.get("/topics", async (req, res) => {
  try {
    const topics = await Topic.find();
    res.json(topics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
