const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  profilePicture: String,
  bio: String,
  preferences: Object // Customizable preferences
});

module.exports = mongoose.model('Profile', profileSchema);
