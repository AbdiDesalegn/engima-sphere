const mongoose = require('mongoose');

const userAnalyticsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  engagementData: Object // Data related to user engagement
});

module.exports = mongoose.model('UserAnalytics', userAnalyticsSchema);
