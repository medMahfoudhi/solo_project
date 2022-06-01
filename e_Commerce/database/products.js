const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;
const products = new mongoose.Schema({
  name: String,
  ref: {
    type: String,
    unique: true,
  },
  price: {
    type: String,
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

const Products = mongoose.model("Products", products);
module.exports = Products;
