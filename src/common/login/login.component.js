import controller from './login.controller';

const LoginComponent = {
  controller,
  template: `
    <div class="login">
      <button ng-click="$ctrl.loginFB()">login with facebook</button>
    </div>
  `
};

export default LoginComponent;
