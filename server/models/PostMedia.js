// models/PostMedia.js
const mongoose = require('mongoose');

const postMediaSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post', // Assuming you have a Post model
  },
  mediaUrl: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    enum: ['image', 'video'],
    required: true,
  },
});

const PostMedia = mongoose.model('PostMedia', postMediaSchema);

module.exports = PostMedia;
