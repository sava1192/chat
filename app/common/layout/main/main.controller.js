class MainController {
  constructor(SocketIOService) {
    this.SocketIOService = SocketIOService;
    this.socket = false;
    this.users = [];
    this.selectedUser = {};
  }
  $onInit() {
    this.SocketIOService.connectToServer().then(users => this.users = users);
    this.SocketIOService.ready.then(socket => {
      this.socket = socket;
      this.socket.on('add user', userId => this.users.push(userId));
      this.socket.on('remove user', uId => this.removeUser(uId));
    });
  }
  startNewChat($event) {
    let user = $event.user;

    if (!user || user.id === this.selectedUser.id) return;

    this.selectedUser = user;
  }
  removeUser(userId) {
    let i = this.users.findIndex(user => user.id === userId);
    this.users.splice(i, 1);
    // console.log(user, this.users.indexOf(user));
  }
}

MainController.$inject = ['SocketIOService'];

export default MainController;
