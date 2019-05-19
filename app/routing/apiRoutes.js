module.exports = function (app) {
    
    app.get("/api/friends", function (req, res) {
        //show friends as JSON
        require("results");
        res.send()
    });
    app.post("/api/friends", function (req, res) {
        // receive friends
        res.send(req.params)
    });

};


