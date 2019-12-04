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
    type: String,
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
  }
});

module.exports = mongoose.model('User', UserSchema);
