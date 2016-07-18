class LayoutController {
  constructor($rootScope, SocialService) {
    this.socialService = SocialService;
    this.$rootScope = $rootScope;
  }
  $onInit() {
    this.status = {};
    this.$rootScope.$on('loginStatusChange', function() {
      console.log(arguments);
      debugger;
    });
    this.updateStatus();
  }
  updateStatus(status) {
    console.log('updateStatus', status);
    if (status) {
      this.status = status;
    } else {
      this.socialService.getStatus().then(status => {
        this.status = status;
      });
    }
  }
}

LayoutController.$inject = ['$rootScope', 'SocialService'];

export default LayoutController;
