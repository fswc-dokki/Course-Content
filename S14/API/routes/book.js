const express = require("express");
const router = express.Router();
const { checkSchema, validationResult } = require("express-validator");

// Importing models
const Book = require("../models/Book");

// Setting up a validation schema for the sent data
const bookCheckSchema = checkSchema({
    title: {
        ltrim: true,
        rtrim: true,
        exists: {
            options: {
                checkFalsy: true
            }
        },
        escape: true
    },
    author: {
        rtrim: true,
        ltrim: true,
        exists: {
            options: {
                checkFalsy: true
            }
        },
        escape: true
    },
    desc: {
        isString: true,
        optional: {
            options: {
                checkFalsy: true
            }
        },
        rtrim: true,
        escape: true
    }
});

router.get("/books", (req, res) => {
    console.log('get/books requested')
    Book.find({}, (err, data) => {
        if (err) console.log(err);
        else res.status(200).send(data);
    });
});

router.post("/book", bookCheckSchema, (req, res) => {
    if (!validationResult(req).isEmpty()) {
        res.status(400).send("Bad Data Format");
        return;
    }
    let newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        desc: req.body.desc
    });
    newBook.save((err, prod) => {
        if (err) {
            res.status(400).send(
                "Error occured while trying to add the book" + err
            );
        } else res.status(200).send("Book added successfully" + prod);
    });
});

router.delete("/book", (req, res) => {
    Book.findOneAndDelete(req.body.conditions, (err, data) => {
        if (err) {
            res.status(500).send(
                "Server Error: Couldn't delete the Book: " + err
            );
        }
        res.status(200).send("Book deleted successfully => " + data);
    });
});

module.exports = router;
