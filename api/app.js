var path = require("path");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var testAPIRouter = require("./routes/testAPI");
var testDBRouter = require("./routes/testDB");
var userLogin = require("./routes/login");

const express = require("express");
const app = express();
const users = require("./routes/users");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const User = require("./controllers/users");
const LocalStrategy = require("passport-local").Strategy;

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/testAPI", testAPIRouter);
app.use("/testDB", testDBRouter);
app.use("/login", userLogin);
// Passport init
app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new LocalStrategy(function (username, password, done) {
    User.getUserByUsername(username, function (err, user) {
      if (err) throw err;
      if (!user) {
        return done(null, false, { message: "Unknown User" });
      }
      User.comparePassword(password, user.password, function (err, isMatch) {
        if (err) console.log("ERROR: \n", err);
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Invalid password" });
        }
      });
    });
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.getUserById(id, function (err, user) {
    done(err, user);
  });
});

app.set("view engine", "jade");
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path));
app.use("/auth", users);

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express Session
app.use(
  session({
    secret: "secret",
    saveUninitialized: true,
    resave: true
  })
);

const http = require("http");

let message = "UPD";
http.createServer(function (request, response) {
    response.end(message);
}).listen(3000, "127.0.0.1", () => {
    console.log("----------------------------------------------------------------".toLocaleUpperCase());
    console.log("---------------Сервер начал прослушивание запросов--------------".toLocaleUpperCase());
    console.log("----------------------------------------------------------------".toLocaleUpperCase());
});

module.exports = app;
