// Requirements
const express = require("express");
const bodyParser = require("body-parser");

// Setup
const app = express();

// Config
app.use(bodyParser.json());

// DB
const db = require("./config/database");

// Routers
const productsRouter = require("./routes/products.js");
app.use("/products", productsRouter);

// Listen
app.listen(3003, () => {
  console.log("Running .....");
});
