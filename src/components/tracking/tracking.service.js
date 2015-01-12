(function(angular) {
  'use strict';

  function TrackingService(EcoTrackingService) {
    var Service = {};

    Service.track = function(data) {
      // data = {service: "eco-tracking|memo|mixpanel|ga", eventName: 'click', data: {}};
      if (data.service === 'eco-tracking') {
        return EcoTrackingService.track(data.eventName, data.data);
      }
    };

    return Service;
  }

  function EcoTrackingService($http, $q) {
    var Service = {};

    Service.track = function(eventName, data) {
      // data = {}
      var deferred = $q.defer();
      var requestData = {
        name: eventName,
        cookie: 'mobile',
        browsing_domain: document.URL,
        referrer_url: document.referrer
      };

      $http.post('http://eco-tracking.memo.edu.vn/users/track', requestData)
        .then(function(response) {
          deferred.resolve(response);
        }, function(response) {
          deferred.reject(response);
        });

      return deferred.promise;
    };

    return Service;
  }

  angular.module('tracking.service', []);
  angular.module('tracking.service')
    .factory('TrackingService', ['EcoTrackingService', TrackingService]);
  angular.module('tracking.service')
    .factory('EcoTrackingService', ['$http', '$q', EcoTrackingService]);
}(window.angular));