const mongoose = require("mongoose");

module.exports = {
    initConfig: () => {
        mongoose
            .connect("mongodb://127.0.0.1:27017/local", { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log("Connected to DB");
            })
            .catch(err => {
                console.error("Error Occured while connecting to DB", err);
            });
    },
    mongoose
};
