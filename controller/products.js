const PRODUCT = require("../models/products");
const mongoose = require("mongoose");

//product create
function create(req, res, next) {
  let productName = req.body.productName;
  let qtyPerUnit = req.body.qtyPerUnit;
  let unitPrice = req.body.unitPrice;
  let unitInStock = req.body.unitInStock;
  let discontinued = req.body.discontinued;
  
  


  let product = new PRODUCT({
    productName,
    qtyPerUnit,
    unitPrice,
    unitInStock,
    discontinued,
    
    
  });
  product
  .populate('catagoryId')
  .save({}).then((data) => {
    res.send(data);
  });
}

//product All view
function view(req, res, next) {
    PRODUCT.find({})
    .then((data) => {
    res.send(data);
  });
}

//product Single view
function singleView(req, res, next) {
  PRODUCT.findOne({_id: req.params.id}).then((data) => {
  res.send(data);
});
}

//product update
function update(req, res, next) {
    PRODUCT.findByIdAndUpdate(req.params.id, req.body, (err, product) => {
     if (err) {
      return res.status(500).send({ error: "Unable to update product " });
    }
    res.send("Update successfully");
  });
}

function distroy(req, res, next) {
  PRODUCT.findByIdAndDelete(req.params.id, req.body, (err, product) => {
    if (err) {
       return res.status(500).send({ error: "Unable to delete Item " });
     }
     res.send("delete successfully");
   });
 }
module.exports.create = create;
module.exports.view = view;
module.exports.singleView = singleView;
module.exports.update = update;
module.exports.distroy = distroy;

