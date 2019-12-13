const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: Number,
  },
  searchGender: {
    type: Number,
  },
  country:{
    type: String,
  },
  checkboxs:{
    type: Object,
  },
  radio:{
    type: Number,
  },
  aboutMe:{
    type: String,
  },
  dateOfBirth:{
    type: Object,
  },
  lang:{
    type: String,
  },
  imgList:{
    type: Array,
  },
  avatar:{
    type: Array
  },
  _active:{
    type: Boolean,
    required: true,
    default: true
  }
}, {versionKey: '_2'});

module.exports = mongoose.model('User', UserSchema);
