const express = require("express");
const router = express.Router();
const Follower = require("./models/Follower");

// Create a new follower relationship
router.post("/follow", async (req, res) => {
  try {
    const { followerId, followingId } = req.body;
    const newFollower = new Follower({
      followerId,
      followingId,
    });
    const savedFollower = await newFollower.save();
    res.json(savedFollower);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all followers of a user
router.get("/followers/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const followers = await Follower.find({ followingId: userId });
    res.json(followers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all users followed by a user
router.get("/following/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const following = await Follower.find({ followerId: userId });
    res.json(following);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
