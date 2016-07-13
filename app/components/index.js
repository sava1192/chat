import angular from 'angular';
import Social from './social';

const components = angular
  .module('app.components', [
    Social
  ])
  .name;

export default components;
