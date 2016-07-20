class LayoutController {
  constructor($rootScope, SocialService) {
    this.SocialService = SocialService;
    this.$rootScope = $rootScope;
  }
  $onInit() {
    this.SocialService.getStatus().then(status => this.status = status);
    this.SocialService.on('auth.statusChange', response => {
      this.status = this.SocialService.createStatus(response.status);
    });
  }
}

LayoutController.$inject = ['$rootScope', 'SocialService'];

export default LayoutController;
