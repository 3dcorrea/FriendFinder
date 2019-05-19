var path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        //home
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.post("/survey", function (req, res) {
        // survey
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // should be a "catch-all" redirect to the root. Syntax probably incorrect
    if (app.get("") != "/") {
        app.get("/", function (req, res) {
            res.sendFile(path.join(__dirname, "../public/home.html"));
        });
    }
};