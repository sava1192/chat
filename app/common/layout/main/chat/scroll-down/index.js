import angular from 'angular';
import ScrollDownDirective from './scroll-down.directive.js';

const ScrollDown = angular
  .module('scroll-down', [])
  .directive('scrollDown', ScrollDownDirective)
  .name;

export default ScrollDown;
