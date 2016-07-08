var app = require('express')();
var server = require('http').Server(app)
var io = require('socket.io')(server);
var port = 3000;
var onlineUsers = [];
var debug = true;

server.listen(3000, function () {
  debug && console.log('server: app is listening on port ' + port);
});

// app.get('/', function (req, res) {
//   res.sendfile('temp.html');
// });

io.on('connection', function (socket) {
  socket.on('new user', function (newUser) {
    debug && console.log('server: new user', newUser);
    onlineUsers.push(newUser);
    socket.broadcast.emit('new user', newUser);
  });
});
