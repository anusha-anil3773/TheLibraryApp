const express = require('express');

let app = express.Router();

app.get('/', function (req, res) {
    res.render("index", { role: req.session.role });
});

module.exports = app;