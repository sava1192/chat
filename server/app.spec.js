var chai = require('chai');
var mocha = require('mocha');
var should = chai.should();
var io = require('socket.io-client');
var port = 3000;

describe('test', function () {
  var server;
  var options = {
    transports: ['websocket'],
    'force new connection': true
  };

  beforeEach(function (done) {
    server = require('./app').server;
    done();
  });

  it('should broadcast "add user" event to all users on login', function (done) {
    var client1 = io.connect('http://localhost:' + port, options);
    var client2 = io.connect('http://localhost:' + port, options);
    var client3 = io.connect('http://localhost:' + port, options);
    var newUser = {
      name: 'user name',
      id: '3983459738'
    };
    var doneNumber = 0;

    client1.once('connect', function () {
      client1.on('add user', function (user) {
        console.log('[Client1] <- add user', user);
        user.should.be.deep.equal(newUser);
        bothDone();
      });
    });
    client2.once('connect', function () {
      client2.on('add user', function (user) {
        console.log('[Client2] <- add user', user);
        user.should.be.deep.equal(newUser);
        bothDone();
      });
    });

    client3.once('connect', function () {
      client3.emit('login', newUser);
    });

    function bothDone () {
      ++doneNumber;
      if (doneNumber > 1) {
        client1.disconnect();
        client2.disconnect();
        client3.disconnect();
        done();
      }
    }
  });
  // it('should send private message to specific user', function (done) {
  //   var clients = [];
  //   var clientsNumber = 3;
  //   var connectedNumber = 0;
  //   var i = 0;

  //   // initialization stuff
  //   for (; i < clientsNumber; i++) {
  //     clinets.push(io.connect('http://localhost:' + port, options));
  //   }
  //   clinets.forEach(function (client) {
  //     client.once('connect', function () {
  //       client.emit('login');
  //       client.once('logged in', function () {
  //         connectedNumber++;
  //         if (connectedNumber === clients.length - 1) {
  //           allConnected();
  //         }
  //       });
  //     });
  //   });

  //   // real tests start here
  //   function allConnected () {
  //     clients[0].emit('private message', 2, 'message');
  //     clients[2].once
  //   }
  // });

});
