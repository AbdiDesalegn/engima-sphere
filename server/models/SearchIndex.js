const mongoose = require('mongoose');

const searchIndexSchema = new mongoose.Schema({
  // Store indexed data for efficient search
  // This could include keywords, tags, etc.
});

module.exports = mongoose.model('SearchIndex', searchIndexSchema);
