// models/Share.js
const mongoose = require('mongoose');

const shareSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post', // Assuming you have a Post model
    required: true,
  },
  dateShared: {
    type: Date,
    default: Date.now,
  },
});

const Share = mongoose.model('Share', shareSchema);

module.exports = Share;
