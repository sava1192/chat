import FB from 'fb';

class SocialService {
  constructor($rootScope, $q) {
    this.$q = $q;
    this.fb = FB;
    this.$rootScope = $rootScope;

    this.fb.init({
      appId: '1317358851610812',
      xfbml: true,
      version: 'v2.6'
    });
    this.fb.Event.subscribe('auth.statusChange', response => {
      this.onStatusChangeFB(response.status);
    });
  }
  onStatusChangeFB(status) {
    this.$rootScope.$broadcast('loginStatusChange', this.createStatusFromFB(status));
  }
  createStatusFromFB(status) {
    let result = {},
        statusCode;

    switch (status) {
      case 'connected':
        statusCode = '111';
        break;
      case 'not_authorized':
        statusCode = '001';
        break;
      case 'unknown':
        statusCode = '000';
        break;
      default:
        statusCode = '000';
        break;
    }
    ['ok', 'hasAccess', 'loggedIn']
      .forEach((item, i) => result[item] = !!(statusCode[i]|0));

    return result;
  }
  getStatus() {
    let deferred = this.$q.defer();
    this.fb.getLoginStatus(response => {
      deferred.resolve(this.createStatusFromFB(response.status));
    });

    return deferred.promise;
  }
  loginToFB() {
    this.fb.login();
  }
  getMyInfo() {
    return this.$q(resolve => {
      this.fb.getLoginStatus(status => resolve(status));
    }).then(response => {
      return this.$q(resolve => {
          this.fb.api('/me', 'get', {
            accessToken: response.authResponse.accessToken
          }, data => resolve({
            status: response.status,
            authResponse: response.authResponse,
            data
          }));
        });
    });
  }
}

SocialService.$inject = ['$rootScope', '$q'];

export default SocialService;
