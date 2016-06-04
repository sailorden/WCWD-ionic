(function () {
  'use strict';

  angular
    .module('app.home')
    .controller('whereCanWeDanceCtrl', whereCanWeDanceCtrl);

  whereCanWeDanceCtrl.$inject = ['$scope', '$ionicModal', '$translate'];

  function whereCanWeDanceCtrl($scope, $ionicModal, $translate) {
    $ionicModal.fromTemplateUrl('app/home/modal.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });
    $scope.change_language = function(lang){
      $translate.use(lang);
      $scope.language = lang;
      window.localStorage.setItem('language', lang);
    };
  }
})();
