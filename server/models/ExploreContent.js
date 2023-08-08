const mongoose = require('mongoose');

const exploreContentSchema = new mongoose.Schema({
  type: String, // Trending, Popular, etc.
  content: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

module.exports = mongoose.model('ExploreContent', exploreContentSchema);
