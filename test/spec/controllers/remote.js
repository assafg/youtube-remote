'use strict';

describe('Controller: RemoteCtrl', function () {

  // load the controller's module
  beforeEach(module('youtubeRemoteApp'));

  var RemoteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RemoteCtrl = $controller('RemoteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
