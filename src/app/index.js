'use strict';

angular.module('mobileLandingpage', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router',
    'tracking', 'download'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $stateProvider
      .state('referral', {
        url: '/referral?campaign&code_channel&platform',
        templateUrl: 'app/referral/index.html',
        controller: 'IndexCtrl'
      })
      .state('downloads', {
        url: '/downloads?platform&code_chanel&redirect',
        templateUrl: 'app/download/download.html',
        controller: 'DownloadCtrl'
      })
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
    $urlRouterProvider.otherwise('/');

    $httpProvider.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded;charset=utf-8';

    $httpProvider.defaults.transformRequest = [function (obj) {
      var str = [];
      for (var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      return str.join("&");
    }];

    $httpProvider.defaults.useXDomain = true;
  });