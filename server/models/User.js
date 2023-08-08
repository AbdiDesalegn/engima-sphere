const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  tokens: [{ type: String }] // For authentication tokens
});

module.exports = mongoose.model('User', userSchema);
