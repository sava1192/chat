import angular from 'angular';
import MainComponent from './main.component.js';
import Users from './users';

const main = angular
  .module('layout.main', [
    Users
  ])
  .component('main', MainComponent)
  .name;

export default main;
