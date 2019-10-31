const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

let databaseConnection = "Waiting for Database response...";

router.get("/", (req, res, next) => res.send(databaseConnection));

const DB_URL = "mongodb_db://localhost/users";

const options = {
  connectTimeoutMS: 10000,
  reconnectInterval: 500,
  reconnectTries: Number.MAX_VALUE,
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose
  .connect(DB_URL, options)

  .then(function () {
    console.log("MongoDB is connected");
  })
  .catch(function (err) {
    console.log(err);
  });

mongoose.connection.on("error", error => {
  console.log("Database connection error:", error);
  databaseConnection = "Error connecting to Database";
});

mongoose.connection.once("open", () => {
  console.log("Connected to Database!");
  databaseConnection = "Connected to Database";
});

module.exports = router;
