const UserComponent = {
  bindings: {
    user: '<'
  },
  template: `
    <div>
      <b>{{$ctrl.user.name}}:</b> {{$ctrl.user.id}}</div>
  `
};

export default UserComponent;
