(function(){
  'use strict';

  angular
    .module('app.auth')
    .controller('signupCtrl', signupCtrl);

  signupCtrl.$inject = ['$scope', '$state', 'AuthService'];
  function signupCtrl($scope, $state, AuthService){
    $scope.data = {};

    $scope.createUser = function(){
      var newEmail = $scope.data.email;
      var newPassword = $scope.data.password;
      var newFullName = $scope.data.fullName;
      var selectedPlan = $state.params.pId;
      AuthService.signupEmail(newEmail, newPassword, newFullName, selectedPlan);
    };
  }
})();
