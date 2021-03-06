var express = require('express');
var app = express();
var server = require('http').Server(app)
var io = require('socket.io')(server);
var port = 3000;
var users = [];
var sockets = [];
var debug = true;

app.use('/', express.static('../dist'));
server.listen(3000, function () {
  debug && console.log('[Server]: app is listening on port ' + port);
});

io.on('connection', socket => {
  sockets.push(socket);

  socket.on('login', newUser => {
    debug && console.log('[Server] <- login', newUser);
    debug && console.log('[Server] -> add user', newUser);

    socket.broadcast.emit('add user', newUser);

    debug && console.log('[Server] -> logged in', users);

    socket.emit('logged in', users);
    users.push(newUser);
    socket.userId = newUser.id;
  });

  socket.on('disconnect', () => {
    var index = users.findIndex(item => item.id === socket.userId);
    var sIndex = sockets.findIndex(item => socket.id === item.id);

    if (sIndex) {
      sockets.splice(sIndex, 1);
      debug && console.log('[Server] : remove socket ', socket.id);
    }

    if (index !== -1){
      users.splice(index, 1);
      debug && console.log('[Server] -> remove user', socket.userId);
      socket.broadcast.emit('remove user', socket.userId);
    } else {
      debug && console.log('[Server] <- old socket disconnect', socket.id);
    }
  });

  socket.on('private message', (to, message) => {
    var toSocket = sockets.find(item => item.userId === to);
    debug && console.log('[Server] <- private message', to, message);
    if (toSocket) {
      toSocket.emit('private message', socket.userId, message);
      debug && console.log('[Server] -> private message', socket.userId, message, toSocket.id);
    }
  });
});
