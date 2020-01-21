const path = require("path");
const User = require("../models/User");
const bcrypt = require('bcryptjs');

module.exports.createUser = function(newUser, callback){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports.getUserByUsername = function(username, callback){
  var query = {username: username};
  User.findOne(query, callback);
};

module.exports.editUser = function(id, callback){
  User.findOneAndUpdate({ _id: id }, { $set: callback }, { upsert: true }, function (err, doc) {
    if (err) { throw err; }
    else { console.log("Updated"); }
  });
};

module.exports.getUserByEmail = function(email, callback){
  console.log('mail');
  var query = {email: email};
  User.findOne(query, callback);
};

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
};

module.exports.login = function (req, res, next) {
  passport.authenticate('local',
    function (err, user, info) {
      return err
        ? next(err)
        : user
          ? req.logIn(user, function (err) {
            return err
              ? next(err)
              : res.redirect('/private');
          })
          : res.redirect('/');
    }
  )(req, res, next);
};

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if (err) {
      callback(err);
    } else {
      callback(null, isMatch);
    }
  });
};
