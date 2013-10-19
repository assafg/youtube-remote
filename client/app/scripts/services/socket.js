'use strict';

angular.module('youtubeRemoteApp')
    .service('Socket', ['$window', '$location', '$rootScope', function Socket($window, $location, $rootScope) {
        //Socket.io
        var url = $location.protocol()+'://'+$location.host();

        var socket = $window.io.connect(url);

        socket.on('localKey', function(data){
            $rootScope.$eval($rootScope.localKey = data);
            $rootScope.$apply();
        });

        return {
            getSocket: function(){
                return socket;
            }
        }

}]);
