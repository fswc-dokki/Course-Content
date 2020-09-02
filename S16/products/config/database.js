const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/online-store", { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", err => console.log(err));

db.on("open", () => {
  console.log("Mongoose connected to DB");
});

module.exports = mongoose;
