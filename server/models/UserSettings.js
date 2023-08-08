const mongoose = require('mongoose');

const userSettingsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  preferences: Object, // Customizable preferences
  accountInfo: Object // Additional account information
});

module.exports = mongoose.model('UserSettings', userSettingsSchema);
