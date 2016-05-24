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

.controller('loginCtrl', function($rootScope, $scope, $state, $ionicPopup, $ionicHistory, AuthService) {
    $scope.data = {};

    $scope.login = function(data) {
        AuthService.login(data.username, data.password).then(function(authenticated) {
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
          $rootScope.isAuthenticated = true;
          $rootScope.$apply();
            $state.go('menu.home', {}, {reload: true});
            $scope.setCurrentUsername(data.username);

        }, function(err) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    };
})
.controller('logoutCtrl', function($rootScope, $scope, $state, $ionicPopup, $ionicHistory, AuthService, AUTH_EVENTS) {
    $scope.data = {};

    $scope.logout = function() {
      AuthService.logout();
      $rootScope.isAuthenticated = false;
      $rootScope.$apply();
      $ionicHistory.nextViewOptions({
        disableBack: true
      });
      $state.go('menu.home');
    };
})

.controller('appCtrl', function($scope, $ionicPopup, $state, $ionicHistory, AuthService, AUTH_EVENTS) {
    $scope.username = AuthService.username();
    $scope.isAuthenticated = AuthService.isAuthenticated();
    $scope.$apply();


    $scope.$on(AUTH_EVENTS.notAuthorized, function(event) {
        var alertPopup = $ionicPopup.alert({
            title: 'Unauthorized!',
            template: 'You are not allowed to access this resource.'
        });
    });

    $scope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
        AuthService.logout()
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        $state.go('menu.login');
        var alertPopup = $ionicPopup.alert({
            title: 'Session Lost!',
            template: 'Sorry, You have to login again.'
        });
    });

    $scope.setCurrentUsername = function(name) {
        $scope.username = name;
    };
})
//.controller('menuCtrl', function($scope, $ionicPopup, $state, $ionicHistory, AuthService, AUTH_EVENTS) {
//
//    $scope.logout = function() {
//        AuthService.logout();
//        $ionicHistory.nextViewOptions({
//            disableBack: true
//        });
//        $state.go('menu.home');
//    };
//
//})
