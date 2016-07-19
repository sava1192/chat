import angular from 'angular';
import UserComponent from './user.component.js';

const main = angular
  .module('layout.main.user', [])
  .component('user', UserComponent)
  .name;

export default main;
