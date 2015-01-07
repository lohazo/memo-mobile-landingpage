'use strict';

angular.module('mobileLandingpage', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $stateProvider
      .state('referral', {
        url: '/referral',
        templateUrl: 'app/referral/index.html',
        controller: 'IndexCtrl'
      })
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'IndexCtrl'
      });
    $urlRouterProvider.otherwise('/');
  });