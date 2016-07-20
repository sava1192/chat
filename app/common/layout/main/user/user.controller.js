class UserController {
  constructor() {

  }
  select() {
    this.onStartChat({
      $event: {
        user: this.user
      }
    });
  }
}

export default UserController;
