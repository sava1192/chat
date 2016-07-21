import angular from 'angular';
import ChatComponent from './chat.component';
import ChatService from './chat.service';
import ScrollDown from './scroll-down';

const chat = angular
  .module('layout.main.chat', [ScrollDown])
  .service('ChatService', ChatService)
  .component('chat', ChatComponent)
  .name;

export default chat;
