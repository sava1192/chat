import controller from './main.controller';

const MainComponent = {
  bindings: {
    status: '<'
  },
  controller,
  template: `
    <div ng-if="$ctrl.status.ok">
      chat view here
      <user ng-repeat="user in $ctrl.users"
            user="user"
            on-start-chat="$ctrl.startNewChat($event)"></user>
      <chat user="$ctrl.selectedUser"
            socket="$ctrl.socket"
            ng-if="$ctrl.socket">
      </chat>
    </div>
  `
}

export default MainComponent;
