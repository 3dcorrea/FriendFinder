var path = require("path");
var express = require("express");
var app = express();


var PORT = process.env.PORT || 8080;

var route = require("./app/routing/apiRoutes.js")
app.use(route);


app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});