import angular from 'angular';
import SocialService from './social.service';

const social = angular
  .module('social', [])
  .service('SocialService', SocialService)
  .name;

export default social;
