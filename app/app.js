import angular from 'angular';
import AppComponent from './app.component';
import Common from './common';
import Components from './components';

const root = angular
  .module('app', [
    Common,
    Components
  ])
  .component('app', AppComponent);

export default root;
