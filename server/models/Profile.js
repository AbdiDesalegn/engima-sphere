const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  profilePicture: String, // Store path to image file
  bio: String,
  username: String,
  email: String,
  updates: [{
    text: String,
    createdAt: { type: Date, default: Date.now }
  }]
});

const ProfileModel = mongoose.model('Profile', profileSchema);

module.exports = ProfileModel;
