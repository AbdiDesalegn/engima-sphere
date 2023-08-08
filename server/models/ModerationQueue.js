const mongoose = require('mongoose');

const moderationQueueSchema = new mongoose.Schema({
  reportedItem: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  status: { type: String, enum: ['pending', 'resolved'] },
  moderator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  resolvedAt: Date
});

module.exports = mongoose.model('ModerationQueue', moderationQueueSchema);
