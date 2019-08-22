const mongoose = require('mongoose');

const { Schema } = mongoose;

const myVoiceSchema = new Schema({
  level: {
    type: String,
    required: true
  },
  range: {
    type: String,
    required: true
  },
  intensity: {
    type: String,
    required: true
  },
  air: {
    type: String,
    required: true
  },
  style: {
    type: String,
    required: true
  },
  record: String,
  artist: {
    type: String,
    required: true
  },
  wishes: {
    type: String,
    required: true
  },
  email: String,
  name:  String,
  username: String,
  password: String,
});

const MyVoice = mongoose.model('MyVoice', myVoiceSchema);
module.exports = MyVoice;
