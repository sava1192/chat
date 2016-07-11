import angular from 'angular';
import AppComponent from './app.component';
import Common from './common';

const root = angular
  .module('app', [
    Common
  ])
  .component('app', AppComponent);

export default root;
