import angular from 'angular';
import SocketIOService from './socketIO.service.js';

const socketIOService = angular
  .module('socketIOService', [])
  .service('SocketIOService', SocketIOService)
  .name

export default socketIOService;
