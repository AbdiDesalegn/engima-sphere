const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// Create a new message
router.post("/messages", async (req, res) => {
  try {
    const { senderId, receiverId, content } = req.body;
    const newMessage = new Message({
      senderId,
      receiverId,
      content,
    });
    const savedMessage = await newMessage.save();
    res.json(savedMessage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get messages between two users
router.get("/messages/:user1/:user2", async (req, res) => {
  try {
    const user1 = req.params.user1;
    const user2 = req.params.user2;
    const messages = await Message.find({
      $or: [
        { senderId: user1, receiverId: user2 },
        { senderId: user2, receiverId: user1 },
      ],
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
