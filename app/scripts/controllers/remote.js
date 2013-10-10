'use strict';

angular.module('youtubeRemoteApp')
    .controller('RemoteCtrl', ['$scope', '$http', function ($scope, $http) {
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
        alert(id);
    }

}]);
