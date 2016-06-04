(function () {
  'use strict';

  angular.module('app.core', ['ionic', 'firebase', 'pascalprecht.translate']);

  angular
    .module('app.core')
    .run(['$ionicPlatform', '$rootScope', '$ionicLoading', function ($ionicPlatform, $rootScope, $ionicLoading, $translate) {
      $rootScope.showLoading = function (msg) {
        $ionicLoading.show({
          template: '<ion-spinner icon="lines" class="spinner-calm"></ion-spinner><br/><br/>' + msg
          //template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div><br>' + msg
        });
      };

      $rootScope.hideLoading = function () {
        $ionicLoading.hide();
      };

      $rootScope.showLoading("Loading...");

      $ionicPlatform.ready(function () {
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
      var lang = window.localStorage['language'];
      $rootScope.language = lang;
    }])

    .config(function ($firebaseRefProvider) {
      $firebaseRefProvider.registerUrl('https://wherecanwedance.firebaseio.com/');
    })
    // translate
    .config(function ($translateProvider) {

      $translateProvider.useStaticFilesLoader({
        prefix: 'i18n/',
        suffix: '.json'
      });
      $translateProvider
        .registerAvailableLanguageKeys(['en', 'fr'], {
          'fr_*': 'fr',
          '*': 'en'
        });

      var lang = window.localStorage['language'];
      if (lang) {
        $translateProvider.preferredLanguage(lang);
      }
      else {
        $translateProvider.preferredLanguage('en');
        window.localStorage.setItem('language', 'en');
      }
      $translateProvider.fallbackLanguage("en");
    });

  angular.module("pascalprecht.translate")
    .factory("$translateStaticFilesLoader", ["$q", "$http", function (a, b) {
      return function (c) {
        if (!c || !angular.isString(c.prefix) || !angular.isString(c.suffix))
          throw new Error("Couldn't load static files, no prefix or suffix specified!");
        var d = a.defer();
        return b({url: [c.prefix, c.key, c.suffix].join(""), method: "GET", params: ""})
          .success(function (a) {
            d.resolve(a)
          })
          .error(function () {
            d.reject(c.key)
          }), d.promise
      }
    }]);

})();
