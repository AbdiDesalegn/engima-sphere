const express = require("express");
const router = express.Router();
const Notification = require("../models/Notification");

// Create a new notification
router.post("/notifications", async (req, res) => {
  try {
    const { userId, content } = req.body;
    const newNotification = new Notification({
      userId,
      content,
    });
    const savedNotification = await newNotification.save();
    res.json(savedNotification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all notifications for a user
router.get("/notifications/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const notifications = await Notification.find({ userId });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
