const mongoose = require("mongoose");
const catagorySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  categoryName : {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model("CATAGORY", catagorySchema);

