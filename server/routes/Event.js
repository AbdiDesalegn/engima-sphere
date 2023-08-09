const express = require("express");
const router = express.Router();
const Event = require("./models/Event");

// Create a new event
router.post("/events", async (req, res) => {
  try {
    const { title, description, location, date } = req.body;
    const newEvent = new Event({
      title,
      description,
      location,
      date,
    });
    const savedEvent = await newEvent.save();
    res.json(savedEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all events
router.get("/events", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
