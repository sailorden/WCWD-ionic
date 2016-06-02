(function(){
  'use strict';

  angular
    .module('app.home')
    .controller('whereCanWeDanceCtrl', whereCanWeDanceCtrl);

  whereCanWeDanceCtrl.$inject = ['$scope', '$ionicModal'];

  function whereCanWeDanceCtrl($scope, $ionicModal){
    $ionicModal.fromTemplateUrl('app/home/modal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });
  }
})();
