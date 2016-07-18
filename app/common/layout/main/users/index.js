import angular from 'angular';
import UsersComponent from './users.component.js';

const main = angular
  .module('layout.main.users', [])
  .component('users', UsersComponent)
  .name;

export default main;
