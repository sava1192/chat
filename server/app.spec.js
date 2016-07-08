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

  it('should broadcast "new user" event to all users', function (done) {
    var client1 = io.connect('http://localhost:' + port, options);
    var client2 = io.connect('http://localhost:' + port, options);
    var client3 = io.connect('http://localhost:' + port, options);
    var newUser = {
      name: 'user name',
      id: '3983459738'
    };
    var doneNumber = 0;

    client1.once('connect', function () {
      client1.once('new user', function (user) {
        user.should.be.deep.equal(newUser);
        bothDone();
      });
    });
    client2.once('connect', function () {
      client2.once('new user', function (user) {
        user.should.be.deep.equal(newUser);
        bothDone();
      });
    });

    client3.once('connect', function () {
      client3.emit('new user', newUser);
    });

    function bothDone () {
      ++doneNumber;
      if (doneNumber > 1) {
        client1.disconnect();
        client2.disconnect();
        done();
      }
    }
  });

  it('should send private message to specific user and not to other', function (done) {
    var client1 = io.connect('http://localhost:' + port, options);
    var client2 = io.connect('http://localhost:' + port, options);
    var client3 = io.connect('http://localhost:' + port, options);

    client1.once('connect', function () {
      client2.once('connect', function () {
        client1
      });
    });

  });

});
