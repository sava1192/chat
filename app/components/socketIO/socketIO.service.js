import io from 'socket.io-client';

class SocketIOService {
  constructor($rootScope, $q, SocialService) {
    this.socialService = SocialService;
    this.$rootScope = $rootScope;
    this.$q = $q;
    this.deferred = $q.defer();
  }

  get ready() {
    return this.deferred.promise;
  }

  connectToServer() {
    return this.$q(resolve => this.socialService.getMyInfo().then(info => {
      this.socket = io('http://274567f8.ngrok.io/');
      this.socket.once('connect', () => {
        this.deferred.resolve(this.getFakeSocket());
        this.socket.emit('login', {
          name: info.data.name,
          id: info.data.id
        });
        this.socket.once('logged in', users => resolve(users));
      });
    }));
  }
  getFakeSocket() {
    return {
      on: (eventName, callback) => {
        this.socket.on(eventName, (...args) => {
          this.$rootScope.$apply(() => callback.apply(this.socket, args));
        });
      },
      emit: this.socket.emit.bind(this.socket)
    };
  }
}

SocketIOService.$inject = ['$rootScope', '$q', 'SocialService'];

export default SocketIOService;
