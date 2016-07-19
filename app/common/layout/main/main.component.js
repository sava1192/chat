import controller from './main.controller';

const MainComponent = {
  bindings: {
    status: '<'
  },
  controller,
  template: `
    <div ng-if="$ctrl.status.ok">
      chat view here
      <user ng-repeat="user in $ctrl.users" user="user"></user>
      <chat></chat>
    </div>
  `
}

export default MainComponent;
