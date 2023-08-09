const express = require("express");
const router = express.Router();
const ModerationQueue = require("./models/ModerationQueue");

// Add a post to the moderation queue
router.post("/moderation-queue", async (req, res) => {
  try {
    const { postId, reason } = req.body;
    const newModerationQueueEntry = new ModerationQueue({
      postId,
      reason,
    });
    const savedModerationQueueEntry = await newModerationQueueEntry.save();
    res.json(savedModerationQueueEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get posts in the moderation queue
router.get("/moderation-queue", async (req, res) => {
  try {
    const moderationQueue = await ModerationQueue.find();
    res.json(moderationQueue);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
