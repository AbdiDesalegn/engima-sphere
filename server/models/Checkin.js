const mongoose = require('mongoose');

const checkinSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
  location: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Checkin', checkinSchema);
