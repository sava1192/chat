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
    window.onbeforeunload = () => this.saveHistory(this.user);
  }
  $onChanges(changes) {
    let user         = changes.user.currentValue,
        previousUser = changes.user.previousValue;

    if (user) {
      this.saveHistory(previousUser);
      this.messages = [];
      this.getHistory(user);
      if (user.messages && user.messages.length) {
        user.messages.forEach(message => this.addMessage(this.user.id, message));
        // hope no one see it :)
        user.messages = [];
      }
    }
  }
  addMessage(userId, message) {
    if (userId === this.user.id){
      this.messages.push({
        text: message,
        in: true,
        time: new Date().getTime()
      });
    } else {
      this.onNewMessage({
        $event: {
          userId,
          message
        }
      });
    }
  }
  saveHistory(user) {
    if (!user.id || !this.messages.length) return;

    localStorage.setItem(`history_${user.id}`, JSON.stringify(this.messages));
  }
  getHistory(user) {
    let messages = JSON.parse(localStorage.getItem(`history_${user.id}`));

    if (messages && messages.length) {
      this.messages = messages;
    }
  }
  sendMessage() {
    let message = this.newMessage.text;

    if (message) {
      this.socket.emit('private message', this.user.id, message);
      this.newMessage.text = ``;
      this.messages.push({
        text: message,
        in: false,
        time: new Date().getTime()
      });
    }
  }
}

export default ChatController;
