import controller from './chat.controller';

const ChatComponent = {
  bindings: {
    user: '<',
    socket: '<',
    onNewMessage: '&'
  },
  controller,
  template: `
    <div ng-hide="$ctrl.user.id" class="top"> Select a user to start a chat </div>
    <div ng-show="$ctrl.user.id">
      <div class="chat_whith">chatting with: <b>{{$ctrl.user.name}}</b></div>
      <div class="scroll">
        <div class="message"
             scroll-down="$ctrl.messages"
             ng-class="message.in ? 'in' : 'out'"
             ng-repeat="message in $ctrl.messages track by $index">
          <small>{{message.time | date : 'shortTime'}}: </small>
          <b>{{message.text}}</b>
        </div>
      </div>
      <form ng-submit="$ctrl.sendMessage()">
        <input type="text" ng-model="$ctrl.newMessage.text"/>
        <button ng-click="$ctrl.sendMessage()">send</button>
      </form>
    </div>
  `
};

export default ChatComponent;
