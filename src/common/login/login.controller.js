class LoginController {
  constructor(LoginService) {
    this.loginService = LoginService;
  }
  loginFB() {
    this.loginService.loginFB();
  }
}

LoginController.$inject = ['LoginService'];

export default LoginController;
