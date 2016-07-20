import angular from 'angular';
import MainComponent from './main.component.js';
import User from './user';
import Chat from './chat';

const main = angular
  .module('layout.main', [
    User,
    Chat
  ])
  .component('main', MainComponent)
  .name;

export default main;
