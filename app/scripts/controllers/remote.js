'use strict';

angular.module('youtubeRemoteApp')
    .controller('RemoteCtrl', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
    $scope.searchTerm = '';

    $scope.items;

    $scope.searchYoutube = function () {

        $http.jsonp('https://www.googleapis.com/youtube/v3/search?key=AIzaSyBL6PS3qcjaI4KSCrysejNsFHNQkHtXShs&part=snippet&q=' +
                 $scope.searchTerm+ '&callback=JSON_CALLBACK').
        success(function(data){
                $scope.items = data.items;
            })
    }

    $scope.play = function(id){
        $http.post('/api/play', {user: $rootScope.user, videoId: id}).
            success(function(){
               alert('playing video');
            });
    }

}]);
