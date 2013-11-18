var config = {
    apiKey:'AIzaSyBL6PS3qcjaI4KSCrysejNsFHNQkHtXShs'
};

var youtube = require('../services/youtube/index')(config);

exports.login = function (req, res) {
    if (req.body.username === 'demo' && req.body.password === '123456') {
        req.session.user = req.body.username;
        res.send(true);
    } else {
        res.send(null);
    }
};

exports.search = function (req, res) {
    var query = req.param('query');
    console.log('Searching for ' + query);

    youtube.search(query, function (err, results) {
        if (err) {
            console.log(err);
            return res.send([]);
        }
        res.send(results);
    });
};