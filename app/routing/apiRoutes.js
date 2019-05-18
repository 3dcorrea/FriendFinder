

var route = express.Router();



route.get('/', function (req, res) {
    res.send('../public/home.html')
})


module.exports = route;
