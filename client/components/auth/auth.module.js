'use strict';

angular.module('angGenFullApp.auth', [
  'angGenFullApp.constants',
  'angGenFullApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
