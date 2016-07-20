class MainController {
  constructor(ChatService, SocialService, SocketIOService) {
    this.ChatService = ChatService;
    this.SocialService = SocialService;
    this.SocketIOService = SocketIOService;
    this.socket = false;
    this.users = [];
    this.selectedUser = {};
    window.c = this;
  }
  $onInit() {
    this.loginUser();
  }
  loginUser() {
    this.SocketIOService.connectToServer().then(users => this.users = users);
    this.SocketIOService.ready.then(socket => this.socket = socket);
  }
  setUsers(users) {
    this.users = users;
  }
  startNewChat($event) {
    let user = $event.user;

    if (!user || user.id === this.selectedUser.id) return;

    this.selectedUser = user;
  }
}

MainController.$inject = ['ChatService', 'SocialService', 'SocketIOService'];

export default MainController;
