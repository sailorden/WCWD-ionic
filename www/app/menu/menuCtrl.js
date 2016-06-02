(function(){
  'use strict';

  angular
    .module('app.menu')
    .controller('menuCtrl', menuCtrl);

    menuCtrl.$inject = ['$scope', '$rootScope', 'AuthService'];

    function menuCtrl ($scope, $rootScope, AuthService) {
      $scope.logout = function(){
        AuthService.logout();
      };
    }

})();
