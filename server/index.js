var app = require('express')();
var server = require('http').Server(app)
var io = require('socket.io')(server);
var port = 3000;

server.listen(3000, function () {
  console.log('test app is listing on port ' + port);
});

// app.get('/', function (req, res) {
//   res.sendfile('temp.html');
// });

io.on('connection', function (socket) {
  socket.on('test', function () {
    console.log('test happend', arguments);

    socket.emit('test', {a:1});
  });
});
