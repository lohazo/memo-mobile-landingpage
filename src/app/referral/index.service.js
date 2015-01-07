(function(angular) {
  'use strict';

  function TrackingService($http, $document) {
    var Service = {};

    Service.track = function(eventName, data) {
      // data = {}
      var requestData = {
        name: eventName,
        cookie: 'mobile',
        user_id: 'mobile_id',
        browsing_domain: document.URL,
        referral_url: document.referrer,
        submitted_form_data: JSON.stringify(data)
      };
      console.log(requestData);
      return $http.post('http://eco-tracking.memo.edu.vn/users/track', requestData);
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