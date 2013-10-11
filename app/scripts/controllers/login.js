'use strict';

angular.module('youtubeRemoteApp')
  .controller('LoginCtrl', ['$scope', '$http', '$location', '$rootScope', function ($scope, $http, $location, $rootScope) {
    $scope.error = '';
    $scope.login = function(){
        $http.post('/api/login', {username: $scope.username, password: $scope.password})
            .success(function(data){
                if (data){
                    $scope.error = '';
                    $rootScope.user = $scope.username; //save the username for the session
                    $location.url('/main');
                }else{
                    $scope.error = 'Login Failed';
                }
            })
    }
  }]);
