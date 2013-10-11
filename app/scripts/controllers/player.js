'use strict';

angular.module('youtubeRemoteApp')
    .controller('PlayerCtrl', ['$scope', '$window', function ($scope, $window) {
        $scope.videoId = 'TG4f9zR5yzY';
        $scope.playing = false;

        $scope.play = function(){
            $scope.playing = true;
            $window.player.loadVideoById({videoId: $scope.videoId, 'suggestedQuality': 'large'});
        }
    }]);
