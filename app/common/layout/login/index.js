import angular from 'angular';
import LoginComponent from './login.component';

const login = angular
  .module('layout.login', [])
  .component('login', LoginComponent)
  .name;

export default login;
