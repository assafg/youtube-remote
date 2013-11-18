var http = require('https');

module.exports = function (config) {
    config = config || {};
    if(!config.apiKey){
        throw 'API KEY is required';
    }
    config.maxResults = config.maxResults || 10;
    var options = {
        host: 'content.googleapis.com',
        method: 'GET'
    };

    return {
        search:function (query, callback) {
            var path =  ['/youtube/v3/search?part=snippet&q=', query, '&key=', config.apiKey, '&maxResults=', config.maxResults].join('');
            options.path = path;
            var req = http.request(options, function(res) {
                res.setEncoding('utf8');
                var buffer = [];
                res.on('data', function (chunk) {
                    buffer.push(chunk);
                });
                res.on('end', function(){
                    console.log(JSON.parse(buffer.join('')));
                    callback(null, JSON.parse(buffer.join('')));
                })
            });

            req.on('error', function(e) {
                console.log('problem with request: ' + e.message);
                callback(e);
            });

            req.end();
        }
    };
};
