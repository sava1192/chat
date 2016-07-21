import controller from './login.controller';

const LoginComponent = {
  bindings: {
    status: '<'
  },
  controller,
  template: `
    <div ng-show="$ctrl.status && !$ctrl.status.ok" class="login">
      <p>You have to be logged in to start chat. Please log in!</p>
      <button ng-click="$ctrl.loginToFB()">log in to facebook</button>
    </div>
  `
};

export default LoginComponent;
