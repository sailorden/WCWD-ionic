angular.module('app.controllers', ['ionic','ion-profile-picture'])
  
.controller('whereCanWeDanceCtrl', function($scope, $ionicModal) {
        $ionicModal.fromTemplateUrl('templates/modal.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
        });
})
   
.controller('salsaCubanWorkshopCtrl', function($scope) {

})
   
.controller('cloudCtrl', function($scope) {

})
  
.controller('preferenceCtrl', function($scope) {

})  

.controller('eventCtrl', function($scope) {

})

.controller('eventAddCtrl', function($scope) {

})

