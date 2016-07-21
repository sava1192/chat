import controller from './user.controller';

const UserComponent = {
  bindings: {
    user: '<',
    onStartChat: '&'
  },
  controller,
  template: `
    <div ng-click="$ctrl.select()" ng-class="{selected: $ctrl.user.selected}">
      <b>{{$ctrl.user.name}}</b>
      <span ng-show="$ctrl.user.messages && $ctrl.user.messages.length">
        ({{$ctrl.user.messages.length}})
      </span>
    </div>
  `
};

export default UserComponent;
