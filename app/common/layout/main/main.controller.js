class MainController {
  constructor(SocketIOService) {
    this.SocketIOService = SocketIOService;
    this.socket = false;
    this.users = [];
    this.selectedUser = {};
    window.c = this;
  }
  $onInit() {
    this.SocketIOService.connectToServer().then(users => this.users = users);
    this.SocketIOService.ready.then(socket => this.socket = socket);
  }
  startNewChat($event) {
    let user = $event.user;

    if (!user || user.id === this.selectedUser.id) return;

    this.selectedUser = user;
  }
}

MainController.$inject = ['SocketIOService'];

export default MainController;
