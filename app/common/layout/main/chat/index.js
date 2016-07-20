import angular from 'angular';
import ChatComponent from './chat.component';
import ChatService from './chat.service';

const chat = angular
  .module('layout.main.chat', [])
  .service('ChatService', ChatService)
  .component('chat', ChatComponent)
  .name;

export default chat;
