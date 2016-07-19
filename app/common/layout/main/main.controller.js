class MainController {
  constructor(SocialService, SocketIOService) {
    this.SocialService = SocialService;
    this.SocketIOService = SocketIOService;
    this.socket = false;
    this.users = [];
    window.c = this;
  }
  $onInit() {
    this.loginUser();
  }
  loginUser() {
    this.SocketIOService.connectToServer().then(users => this.users = users);
    console.log(this.users);
  }
  setUsers(users) {
    this.users.push(...users)
  }
}

MainController.$inject = ['SocialService', 'SocketIOService'];

export default MainController;
