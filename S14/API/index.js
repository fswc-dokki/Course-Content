const express = require("express");
const cors = require("cors");
const app = express();

// DB
const { initConfig } = require('./config/db');
initConfig();

// parse the body of the request
app.use(express.json());

// Enable cors
app.use(cors());

/** Actual App starts here */

//Import Routes
const book = require("./routes/book");

// Using the Book route
app.use(book);

// Listen to port
app.listen(4000, (res) => {
    console.log("Server listening on port 4000");
})
