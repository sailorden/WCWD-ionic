(function(){
  'use strict';

  angular.module('app.core', ['ionic', 'firebase']);

  angular
    .module('app.core')
    .run(['$ionicPlatform', '$rootScope', '$ionicLoading', function($ionicPlatform, $rootScope, $ionicLoading) {
      $rootScope.showLoading = function(msg) {
        $ionicLoading.show({
          template: '<ion-spinner icon="lines" class="spinner-calm"></ion-spinner><br/><br/>' + msg
          //template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div><br>' + msg
        });
      };

      $rootScope.hideLoading = function() {
        $ionicLoading.hide();
      };

      $rootScope.showLoading("Loading...");

      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }

        $rootScope.hideLoading();
      });
    }])

    .config(function($firebaseRefProvider) {
      $firebaseRefProvider.registerUrl('https://wherecanwedance.firebaseio.com/');
    });

})();
