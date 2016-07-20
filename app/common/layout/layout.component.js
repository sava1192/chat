import controller from './layout.controller';

const LayoutComponent = {
  controller,
  template: `
    <login status="$ctrl.status"></login>
    <main status="$ctrl.status" ng-if="$ctrl.status.ok"></main>
  `
};

export default LayoutComponent;
