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

  it('test', function (done) {
    var client = io.connect('http://localhost:' + port, options);

    client.once('connect', function () {
      client.once('test', function (message) {
        message.should.equal('hello');

        client.disconnect();
        done();
      })

      client.emit('test', 'hello');
    });
  });
  // it('should broadcast new user to all users', function (done) {
  //   var client1 = io.connect('http://localhost:' + port, options);
  //   var client2 = io.connect('http://localhost:' + port, options);


  // });
});
