var chai = require('chai');
var mocha = require('mocha');
var should = chai.should();
var io = require('socket.io-client');
var port = 3000;

describe('test' () => {
  var server;
  var options = {
    transports: ['websocket'],
    'force new connection': true
  };

  beforeEach(done => {
    server = require('app').server;
    done();
  });

  it('test', done => {
    var client = io.connect('http://localhost:' + port);

    client.once('connect', () => {
      client.once('test', message => {
        message.should.equal('hello');

        client.disconnect();
        done();
      })

      client.emit('test', 'hello');
    });
  })
});
