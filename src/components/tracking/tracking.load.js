(function (angular) {
  'use strict';

  function TrackingLoad() {
    return {
      restrict: 'EA',
      scope: true,
      link: function ($scope) {
        $scope.track();
      },
      controller: 'TrackingLoadCtrl'
    };
  }

  function TrackingLoadCtrl($scope, TrackingService) {
    $scope.track = function () {
      TrackingService.track({
        service: 'eco-tracking',
        eventName: 'Enter page',
        data: {}
      });
    };
  }

  angular.module('tracking.load', []);
  angular.module('tracking.load')
    .controller('TrackingLoadCtrl', ['$scope', 'TrackingService', TrackingLoadCtrl]);
  angular.module('tracking.load')
    .directive('trackingLoad', TrackingLoad);
}(window.angular));