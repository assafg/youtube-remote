/**
 * Module dependencies.
 */

var express = require('express')
    , connect = require('connect')
    , routes = require('./routes')
    , youtube = require('./routes/youtube')
    , http = require('http')
    , path = require('path');

var app = express();

var socketUsers = {}

var cookieParser = express.cookieParser('your secret sauce')
    , sessionStore = new connect.middleware.session.MemoryStore();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(cookieParser);
    app.use(express.session({ store:sessionStore }));
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'dist')));
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

app.get('/api/youtube/search/:query', youtube.search);

app.post('/api/login', routes.login);

app.post('/api/play', function(req, res){
    var user = req.body.user,
        videoId  = req.body.videoId;

    var socket = socketUsers[user];
    if(!socket){
        return res.send(403, 'Login required');
    }
    socket.emit('play', {videoId: videoId});
});

var server = http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});

/*
Socket.IO
 */
var io = require('socket.io').listen(server),
    SessionSockets = require('session.socket.io')
    , sessionSockets = new SessionSockets(io, sessionStore, cookieParser);

sessionSockets.on('connection', function (err, socket, session) {

    socket.emit('user', session.user);

    socketUsers[session.user] = socket;

    socket.on('foo', function(value) {
        session.foo = value;
        session.save();
        socket.emit('session', session);
    });
});
