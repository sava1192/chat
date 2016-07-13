class LayoutController {
  constructor(SocialService) {
    this.socialService = SocialService;
  }
  $onInit() {
    this.status = {};
    this.updateStatus();
  }
  updateStatus() {
    this.socialService.getStatus().then(status => {
      this.status = status;
    });
  }
}

LayoutController.$inject = ['SocialService'];

export default LayoutController;
