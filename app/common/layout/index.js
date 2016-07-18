import angular from 'angular';
import LayoutComponent from './layout.component';
import Login from './login';
import Main from './main';

const layout = angular
  .module('app.common.layout', [
    Login,
    Main
  ])
  .component('layout', LayoutComponent)
  .name;

export default layout;
