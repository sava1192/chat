import controller from './login.controller';

const LoginComponent = {
  bindings: {
    status: '<'
  },
  controller,
  template: `
    <div ng-show="!$ctrl.status.ok">
      <button ng-click="$ctrl.loginToFB()">log in to facebook</button>
    </div>
  `
};

export default LoginComponent;
