import controller from './layout.controller';

const LayoutComponent = {
  controller,
  template: `
    <login status="$ctrl.status"></login>
    <main status="$ctrl.status"></main>
  `
};

export default LayoutComponent;
