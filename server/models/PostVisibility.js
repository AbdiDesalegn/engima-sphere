const mongoose = require('mongoose');

const postVisibilitySchema = new mongoose.Schema({
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  visibility: { type: String, enum: ['public', 'friends-only', 'private'] }
});

module.exports = mongoose.model('PostVisibility', postVisibilitySchema);
