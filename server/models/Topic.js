// models/Topic.js
const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  // Other fields related to the topic
});

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;
