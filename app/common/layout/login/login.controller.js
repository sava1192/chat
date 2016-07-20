class LoginController {
  constructor(SocialService) {
    this.socialService = SocialService;
  }
  loginToFB() {
    this.socialService.loginToFB();
  }
}

LoginController.$inject = ['SocialService'];

export default LoginController;
