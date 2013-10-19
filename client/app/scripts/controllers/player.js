'use strict';

angular.module('youtubeRemoteApp')
    .controller('PlayerCtrl', ['$scope', '$location', '$window', '$rootScope', '$modal' ,'Socket', function ($scope, $location, $window, $rootScope, $modal, Socket) {
        $scope.videoId = 'TG4f9zR5yzY';
        $scope.playing = false;

        $scope.play = function () {
            $scope.playing = true;
            $window.player.loadVideoById({videoId:$scope.videoId, 'suggestedQuality':'large'});
        }

        $rootScope.$watch('localKey', function(){
            if($rootScope.localKey){

            }

        });

        //Socket.io
        var socket = Socket.getSocket();
        socket.on('play', function (data) {
            console.log('onPlay');
            $scope.connected = true;
            $scope.videoId = data.videoId;
            $scope.play();
        });
}]);
