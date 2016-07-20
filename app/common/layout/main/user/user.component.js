import controller from './user.controller';

const UserComponent = {
  bindings: {
    user: '<',
    onStartChat: '&'
  },
  controller,
  template: `
    <div ng-click="$ctrl.select()">
      <b>{{$ctrl.user.name}}:</b> {{$ctrl.user.id}}
    </div>
  `
};

export default UserComponent;
