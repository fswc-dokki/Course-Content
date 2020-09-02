const mongoose = require("../config/database");

const productsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  amount: Number
});

module.exports = mongoose.model("Product", productsSchema, "products");
