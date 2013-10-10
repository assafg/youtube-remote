var key='AIzaSyBL6PS3qcjaI4KSCrysejNsFHNQkHtXShs',
    http = require('http');

/**
 * Search Youtube API
 * @param request
 * @param response
 */
exports.search = function (request, response) {
    var query = request.param('query');
    console.log('Searching for ' + query);

    var options = {
        host: 'https://gdata.youtube.com',
        path: '/youtube/v3/search?part=snippet&q='+query+'key='+key+'&max-results=10',
        method: 'GET'
    };

    var req = http.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log(chunk);
            response.write(chunk);
        });
        res.on('end', function(){
            response.end();
        })
    });

    req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });

    req.end();
};
