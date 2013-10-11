'use strict';

angular.module('youtubeRemoteApp')
    .controller('PlayerCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.videoId = 'TG4f9zR5yzY';
        $scope.playing = false;

        $scope.play = function () {
            $scope.playing = true;
            $window.player.loadVideoById({videoId:$scope.videoId, 'suggestedQuality':'large'});
        }

        var url = $location.protocol()+'://'+$location.host();

        //Socket.io
        var socket = $window.io.connect(url);
        socket.on('play', function (data) {
            $scope.videoId = data.videoId;
            $scope.play();
        });
}]);
