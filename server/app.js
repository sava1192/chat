var app = require('express')();
var server = require('http').Server(app)
var io = require('socket.io')(server);
var port = 3000;
var users = [];
var sockets = [];
var debug = true;

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
    users.splice(users.findIndex(item => item.userId === socket.userId), 1);

    debug && console.log('[Server] -> remove user', socket.userId);

    socket.broadcast.emit('remove user', socket.userId);
  });

  socket.on('private message', (to, message) => {
    debug && console.log('[Server] <- private message', to, message);
    debug && console.log('[Server] -> private message', socket.userId, message);

    sockets.find(item => item.userId === to).emit('private message', socket.userId, message);
  });
});
