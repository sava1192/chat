import controller from './login.controller';

const LoginComponent = {
  bindings: {
    status: '<',
    onStatusChange: '&'
  },
  controller,
  template: `
    <div ng-show="$ctrl.status.notLoggedIn">
      <fb:login-button"></fb:login-button>
    </div>
  `
};

export default LoginComponent;
