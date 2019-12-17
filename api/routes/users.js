require("dotenv").config();
var express = require("express");
var router = express.Router();
const UserShema = require("../models/User");
const User = require("../controllers/users");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
var passport = require("passport");

// register
router.post("/register", function (req, res) {
  const checkReq = !req.body.username || !req.body.password || !req.body.email || !req.body.age

  if ( checkReq ) {
    res.json({ success: false, msg: "Please pass username and password." });
  } else {
    var newUser = new UserShema({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      age: req.body.age,
      gender: req.body.gender,
      searchGender: req.body.searchGender,
    });

    // save the user
    User.createUser(newUser, function (err, user) {
      // console.log(newUser);

      if (err) {
        res.status(400).send(err);
      } else {
        res.send(user).end();
      }
    });
  }
});

// login
router.post("/login", passport.authenticate("local"), function (req, res) {
  res.send(req.user);
});

// editUser
router.post("/editUser/:userId", function (req, res) {
  const id = req.params.userId;
  // console.log(req.body.data.imgList);

  User.editUser(id, req.body);
  res.send(req.body);
});

// Endpoint to get current user
router.get('/user', function (req, res) {
  res.send(req.user);
});

// Endpoint to get allUser
router.get('/usersList', function (req, res) {
  UserShema.find({}, function (err, users) {
    res.send(users);
  });
});

// Endpoint to get paginationUsers
router.get('/api/:startUser/:count', function (req, res) {
  UserShema.find({}, function (err, users) {
    const startUser = parseInt(req.params.startUser);
    const count = parseInt(req.params.count);
    res.send(users.slice(startUser, startUser + count));
  });
});

// Endpoint to get countUser
router.get('/api/countUsers', function (req, res) {
  UserShema.countDocuments({ }, function (err, count) {
    res.send({count})
  });
});

// Endpoint to logout
router.get('/logout', function (req, res) {
  req.logout();
  res.send(null)
});

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(" ");
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;
