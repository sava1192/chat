const MainComponent = {
  bindings: {
    status: '<'
  },
  template: `
    <div ng-show="$ctrl.status.ok">
      chat view here
      <users></users>
      <chat></chat>
    </div>
  `
}

export default MainComponent;
