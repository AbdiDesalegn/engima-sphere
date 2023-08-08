const mongoose = require('mongoose');

const hashtagSchema = new mongoose.Schema({
  name: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

module.exports = mongoose.model('Hashtag', hashtagSchema);
