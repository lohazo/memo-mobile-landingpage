(function(angular) {
  'use strict';

  function TrackingClickCtrl($scope) {}

  function TrackingClick() {
    return {
      strict: 'EA',
      scope: {
        trackingData: "@"
      },
      controller: 'TrackingClickCtrl'
    };
  }

  angular.module('tracking.click', []);
  angular.module('tracking.click')
    .controller('TrackingClickCtrl', ['$scope', TrackingClickCtrl]);
  angular.module('tracking.click')
    .directive('trackingClick', TrackingClick);
}(window.angular));