class ChatController {
  constructor() {

  }
  $onInit() {
    this.messages = [];
    this.newMessage = {
      in: false,
      text: ''
    };
    this.user = {};
    this.socket.on('private message', (id, message) => this.addMessage(id, message));
  }
  $onChanges(changes) {
    let user = changes.user;
    if (user) {
      this.user = Object.assign({}, user.currentValue);
    }
  }
  addMessage(userId, message) {
    if (userId === this.user.id){
      this.messages.push({
        text: '<-' + message
      });
    } else {
      console.log('to users list:', message);
    }
  }
  sendMessage() {
    let message = this.newMessage.text;

    if (message) {
      this.socket.emit('private message', this.user.id, message);
      this.newMessage.text = '';
      this.messages.push({
        text: '-> ' + message
      })
    }
  }
}

// ChatController.$inject = ['$scope', 'SocketIOService'];

export default ChatController;
