(function(){
  'use strict';

  angular
    .module('app.auth')
    .controller('passwordResetCtrl', passwordResetCtrl);
  /**
   * Again, we inject our auth service
   */
  passwordResetCtrl.$inject = ['$scope', 'AuthService'];

  function passwordResetCtrl($scope, AuthService){
    $scope.data = {}; // Empty object to get the form data.

    /**
     * We grab our user's email from the form and send it to our service, piece of cake!
     */
    $scope.resetPassword = function(){
      var email = $scope.data.email;
      AuthService.resetPassword(email);
    };
  }
})();
