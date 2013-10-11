'use strict';

angular.module('youtubeRemoteApp')
    .controller('RemoteCtrl', ['$scope', '$http', '$rootScope', '$location', function ($scope, $http, $rootScope, $location) {
    $scope.searchTerm = '';

    $scope.items;


    $scope.connect = function(){
        $rootScope.pairKey = $scope.remoteKey;
        $scope.connected = true;
    }

    $scope.searchYoutube = function () {

        $http.jsonp('https://www.googleapis.com/youtube/v3/search?key=AIzaSyBL6PS3qcjaI4KSCrysejNsFHNQkHtXShs&part=snippet&q=' +
                 $scope.searchTerm+ '&callback=JSON_CALLBACK').
        success(function(data){
                $scope.items = data.items;
            })
    }

    $scope.play = function(id){
        $http.post('/api/play', {pairKey: $rootScope.pairKey, videoId: id}).
            success(function(){
               alert('playing video');
            });
    }

}]);
