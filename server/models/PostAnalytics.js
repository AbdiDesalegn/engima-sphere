const mongoose = require('mongoose');

const postAnalyticsSchema = new mongoose.Schema({
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  engagementData: Object // Data related to post engagement
});

module.exports = mongoose.model('PostAnalytics', postAnalyticsSchema);
