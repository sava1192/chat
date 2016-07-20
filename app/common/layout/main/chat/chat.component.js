import controller from './chat.controller';

const ChatComponent = {
  bindings: {
    user: '<',
    socket: '<'
  },
  controller,
  template: `
    <div ng-show="$ctrl.user.id">
      <div>chatting with: {{$ctrl.user.name}}</div>
      <div>
        <div ng-repeat="message in $ctrl.messages track by message.time">{{message.text}}</div>
      </div>
      <form ng-submit="$ctrl.sendMessage()">
        <input type="text" ng-model="$ctrl.newMessage.text"/>
        <button ng-click="$ctrl.sendMessage()">send</button>
      </form>
    </div>
  `
};

export default ChatComponent;
