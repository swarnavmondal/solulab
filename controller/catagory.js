const CATAGORY = require("../models/catagory");
const mongoose = require("mongoose");

//Catagory create
function create(req, res, next) {
  
  let categoryName = req.body.categoryName;
  

  let catagory = new CATAGORY({
   
    categoryName,

  });
  catagory.save().then((data) => {
    res.send(data);
  });
}

//Catagory view
function view(req, res, next) {
    CATAGORY.find({}).then((data) => {
    res.send(data);
  });
}


module.exports.create = create;
module.exports.view = view;

