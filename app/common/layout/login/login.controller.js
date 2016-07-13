class LoginController {
  constructor() {
  }
  $onChanges(changes) {
    let status = changes.status;
    if (status) {
      console.log('chagnes: ', status.previousValue, status.currentValue);
      // cloning not to share same object reference.
      this.status = Object.assign({}, status.currentValue);
    }
  }
}

export default LoginController;
