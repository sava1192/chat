import angular from 'angular';
import Social from './social';
import SocketIO from './socketIO';

const components = angular
  .module('app.components', [
    Social,
    SocketIO
  ])
  .name;

export default components;
