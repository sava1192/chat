import angular from 'angular';
import LayoutComponent from './layout.component';
import Login from './login';

const layout = angular
  .module('app.common.layout', [
    Login
  ])
  .component('layout', LayoutComponent)
  .name;

export default layout;
