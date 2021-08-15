const express = require("express");
var app = express();
var mongoose = require("mongoose");

const router = require("./routes/products");
const router1 = require("./routes/catagory");




//Route
app.get("/", function (req, res) {
  res.send("Welcome to my World");
});
//for product
app.use("/product", router);

// For Catagory
app.use("/catagory", router1);




//MongoDB connection
mongoose.connect("mongodb://localhost/testdetails", { useNewUrlParser: true });
mongoose.connection
  .once("open", function () {
    console.log("Database connected Successfully");
  })
  .on("error", function (err) {
    console.log("Error", err);
  });
//Server
app.listen(7000, function () {
  console.log("Server is Up");
});
