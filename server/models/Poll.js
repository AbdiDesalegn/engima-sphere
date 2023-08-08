const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
  question: String,
  options: [String],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  voters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Poll', pollSchema);
