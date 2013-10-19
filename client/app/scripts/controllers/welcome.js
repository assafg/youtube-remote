'use strict';

angular.module('youtubeRemoteApp')
    .controller('WelcomeCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.getStarted = function () {
             $location.url('/main');

        }
}]);
