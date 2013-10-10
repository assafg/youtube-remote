'use strict';

angular.module('youtubeRemoteApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/remote', {
        templateUrl: 'views/remote.html',
        controller: 'RemoteCtrl'
      })
      .when('/player', {
        templateUrl: 'views/player.html',
        controller: 'PlayerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
