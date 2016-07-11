import angular from 'angular';
import LoginComponent from './login.component';
import LoginService from './login.service';

console.log(LoginService);

const login = angular
  .module('login', [])
  .component('login', LoginComponent)
  .service('LoginService', LoginService)
  .name;

export default login;
