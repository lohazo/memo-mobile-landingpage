(function (angular) {
  'use strict';

  function DownloadCtrl($scope, $stateParams, $window, $timeout) {
    var redirect = $stateParams.redirect;
    $timeout(function () {
      $window.location = redirect;
    }, 1000);
  }

  angular.module('download', []);
  angular.module('download')
    .controller('DownloadCtrl', ['$scope', '$stateParams', '$window', '$timeout', DownloadCtrl]);
}(window.angular));