const express = require("express");
const router = express.Router();
const Report = require("../models/Report");

// Create a new report
router.post("/reports", async (req, res) => {
  try {
    const { postId, userId, reason } = req.body;
    const newReport = new Report({
      postId,
      userId,
      reason,
    });
    const savedReport = await newReport.save();
    res.json(savedReport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get reports for a specific post
router.get("/reports/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const reports = await Report.find({ postId });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
