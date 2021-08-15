const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    productName: {
    type: String,
    required: true,
  },
  qtyPerUnit: {
    type: String,
    required: true,
  },
  unitPrice: {
    type: String,
    required: true,
  },
  unitInStock : {
    type: String,
    required: true,
  },
  discontinued : {
    type: Boolean,
    required: true,
  },
  categoryId : [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: "CATAGORY"
 }]
});



module.exports = mongoose.model("PRODUCT", productSchema);

