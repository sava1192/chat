import angular from 'angular';
import AppComponent from './app.component';

const root = angular
  .module('app', [])
  .component('app', AppComponent);

export default root;
