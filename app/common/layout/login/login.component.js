import controller from './login.controller';

const LoginComponent = {
  bindings: {
    status: '<'
  },
  controller,
  template: `
    <div ng-show="$ctrl.status && !$ctrl.status.ok">
      You have to be logged in to start chat. Please log in!
      <button ng-click="$ctrl.loginToFB()">log in to facebook</button>
    </div>
  `
};

export default LoginComponent;
