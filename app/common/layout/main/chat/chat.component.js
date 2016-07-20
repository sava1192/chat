import controller from './chat.controller';

const ChatComponent = {
  bindings: {
    user: '<',
    socket: '<'
  },
  controller,
  template: `
    <div ng-show="$ctrl.user.id">
      <div>chat:</div>
      <div>
        <div ng-repeat="message in $ctrl.messages">{{message.text}}</div>
      </div>
      <input type="text" ng-model="$ctrl.newMessage.text"/>
      <button ng-click="$ctrl.sendMessage()">send</button>
    </div>
  `
};

export default ChatComponent;
