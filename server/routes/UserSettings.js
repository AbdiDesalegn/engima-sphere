const express = require("express");
const router = express.Router();
const UserSettings = require("./models/UserSettings");

// Update user settings
router.put("/user-settings/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const { emailNotifications, pushNotifications } = req.body;
    const updatedUserSettings = await UserSettings.findOneAndUpdate(
      { userId },
      { emailNotifications, pushNotifications },
      { new: true }
    );
    res.json(updatedUserSettings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user settings by user ID
router.get("/user-settings/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const userSettings = await UserSettings.findOne({ userId });
    res.json(userSettings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
