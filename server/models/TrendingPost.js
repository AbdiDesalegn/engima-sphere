const mongoose = require('mongoose');

const trendingPostSchema = new mongoose.Schema({
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  popularity: Number // Based on likes, shares, etc.
});

module.exports = mongoose.model('TrendingPost', trendingPostSchema);
