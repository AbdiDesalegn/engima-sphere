const express = require("express");
const router = express.Router();
const User = require("./models/User");

// Create a new user
router.post("/users", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({
      username,
      email,
      password,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user by username
router.get("/users/:username", async (req, res) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({ username });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
