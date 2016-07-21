import controller from './main.controller';

const MainComponent = {
  bindings: {
    status: '<'
  },
  controller,
  template: `
    <div class="chat_wrapper">
      <div class="user_wrapper">
        <div class="user_header">friends</div>
        <user ng-repeat="user in $ctrl.users"
              user="user"
              on-start-chat="$ctrl.startNewChat($event)">
        </user>
      </div>
      <chat user="$ctrl.selectedUser"
            socket="$ctrl.socket"
            on-new-message="$ctrl.addMessageToUser($event)"
            ng-if="$ctrl.socket">
      </chat>
    </div>
  `
};

export default MainComponent;
