const express = require("express");
var app = express.Router();
app.get("/", function (req, res) {
    res.send('Hello World!')
});


module.exports = app;
