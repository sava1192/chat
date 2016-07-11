import angular from 'angular';
import Login from './login';

const common = angular
  .module('app.common', [
    Login
  ])
  .name;

export default common;
