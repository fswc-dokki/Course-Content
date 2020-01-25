const { mongoose } = require("../config/db");

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    desc: String
});

module.exports = mongoose.model('Book', bookSchema);