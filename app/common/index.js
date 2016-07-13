import angular from 'angular';
import Layout from './layout';

const common = angular
  .module('app.common', [
    Layout
  ])
  .name;

export default common;
