import io from 'socket.io-client';

class SocketIOService {
  constructor($q, SocialService) {
    this.socialService = SocialService;
    this.$q = $q;
  }
  $onInit() {
  }

  connectToServer() {
    return this.$q(resolve => this.socialService.getMyInfo().then(info => {
      this.socket = io('localhost:3000');
      this.socket.once('connect', () => {
        this.socket.emit('login', {
          name: info.data.name,
          id: info.data.id
        });
        this.socket.once('logged in', users => resolve(users));
      });
    }));
  }
}

SocketIOService.$inject = ['$q', 'SocialService'];

export default SocketIOService;
