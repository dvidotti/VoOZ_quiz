const mongoose = require('mongoose');

const { Schema } = mongoose;

const contentSchema = new Schema({
  audio_one: String,
  audio_two: String,
  audio_three: String,
  audio_four: String,
});

const Content = mongoose.model('Content', contentSchema);
module.exports = Content;
