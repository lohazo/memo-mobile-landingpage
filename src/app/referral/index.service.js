(function(angular) {
  'use strict';

  function TrackingService($http, $document) {
    var Service = {};

    Service.track = function(eventName, data) {
      // data = {}
      var requestData = {
        name: eventName,
        cookie: 'mobile',
        browsing_domain: document.URL,
        referrer_url: document.referrer
      };
      return $http.post('http://eco-tracking.memo.edu.vn/users/track', requestData)
        .success(function() {})
        .error(function() {

        });
    };

    return Service;
  }

  function LoadEventTrack() {
    return {
      restrict: 'EA',
      scope: true,
      link: function($scope, $element) {
        $scope.track();
      },
      controller: 'LoadEventTrackCtrl'
    };
  }

  function LoadEventTrackCtrl($scope, TrackingService) {
    $scope.track = function() {
      TrackingService.track('Enter page', {});
    };
  }

  angular.module('mobileLandingpage')
    .factory('TrackingService', ['$http', '$document', TrackingService]);

  angular.module('mobileLandingpage')
    .directive('loadEventTrack', LoadEventTrack)
    .controller('LoadEventTrackCtrl', ['$scope', 'TrackingService', LoadEventTrackCtrl]);
}(window.angular));