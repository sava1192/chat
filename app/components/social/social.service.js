import FB from 'fb';

class SocialService {
  constructor($q) {
    this.$q = $q;
    this.fb = FB;
    this.fb.init({
      appId: '1317358851610812',
      xfbml: true,
      version: 'v2.6'
    });
    // this.fb.Event.subscribe('auth.statusChange', res =>{
    //   console.log('statuschage', res);
    // })
  }
  getStatus() {
    let deferred = this.$q.defer();
    this.fb.getLoginStatus(response => {
      let status = response.status;

      if (status === 'connected') {
        deferred.resolve({ok: true});
      } else if (status === 'not_authorized') {
        deferred.resolve({noAccess: true});
      } else if (status === 'unknown') {
        deferred.resolve({notLoggedIn: true});
      } else {
        deferred.resolve(status);
      }
      // real reject can not be caught here, because of FaceBook API
    });

    return deferred.promise;
  }
}

SocialService.$inject = ['$q'];

export default SocialService;
