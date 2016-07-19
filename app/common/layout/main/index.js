import angular from 'angular';
import MainComponent from './main.component.js';
import User from './user';

const main = angular
  .module('layout.main', [
    User
  ])
  .component('main', MainComponent)
  .name;

export default main;
