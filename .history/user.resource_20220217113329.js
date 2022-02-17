const express = require("express");
var app = express.Router();
app.get("/", function (req, res) {
    console.log("called")
    res.send('Hello World!')
});


module.exports = app;
