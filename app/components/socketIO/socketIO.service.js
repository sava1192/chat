import FB from 'fb';

class SocketIOService {
  constructor(SocialService) {
    this.fb = FB;
    // this.fb.Event.subscribe('auth.statusChange', res =>{
    //   console.log('statuschage', res);
    // })
    this.socialService = SocialService;
    this.socialService.getStatus().then(status => {
      if (status.ok) {
        this.connectToServer();
      } else {

      }
    });
  }
  // checkStatus() {
  //   this.socialService.getStatus().then(status => {
  //     if (status.ok) {

  //     }
  //   });
  // }
  connectToServer() {

  }
}
