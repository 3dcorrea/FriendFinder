var express = require("express");

var app = express();
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;
// added body-parser on recommendation of TA; unsure of application
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});