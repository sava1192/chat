import controller from './layout.controller';

const LayoutComponent = {
  controller,
  template: `
    <div>layout component</div>
    <login status="$ctrl.status"
           on-status-change="$ctrl.updateStatus($event)">
  `
};

export default LayoutComponent;
