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

        $http.get('/api/youtube/search/' +
                 $scope.searchTerm).
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
