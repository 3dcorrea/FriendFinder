var express = require("express");
var path = require("path");
var route = express.Router();

module.exports = route;

route.get('/', (req, res)); {
    res.send('/ being hit');
}