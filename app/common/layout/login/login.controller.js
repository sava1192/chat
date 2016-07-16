class LoginController {
  constructor(SocialService) {
    this.socialService = SocialService;
  }
  $onChanges(changes) {
    let status = changes.status;
    if (status) {
      console.log('chagnes: ', status.previousValue, status.currentValue);
      // cloning not to share same object reference.
      this.status = Object.assign({}, status.currentValue);
    }
  }
  loginToFB() {
    this.socialService.loginToFB();
  }
}

LoginController.$inject = ['SocialService'];

export default LoginController;
