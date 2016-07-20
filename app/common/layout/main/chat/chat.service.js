class ChatService {
  constructor(SocketIOService) {
    this.SocketIOService = SocketIOService;
  }
  // $onInit() {
  //   this.SocketIOService.getSocket().then(socket => {
  //     socket.on('private message', onNewMessage);
  //   });
  // }
  onNewMessage(message) {

  }
}

ChatService.$inject = ['SocketIOService'];

export default ChatService;
