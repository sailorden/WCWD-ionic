(function(){
  'use strict';

  angular
    .module('app.core')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

      $stateProvider

        .state('menu.home', {
          url: '/home',
          views: {
            'side-menu21': {
              templateUrl: 'app/home/whereCanWeDance.html',
              controller: 'whereCanWeDanceCtrl'
            }
          }
        })

        .state('menu.detail', {
          url: '/eventDetail/:id',
          views: {
            'side-menu21': {
              templateUrl: 'app/event/detail.html',
              controller: 'detailCtrl'
            }
          }
        })

        .state('menu.preference', {
          url: '/preference',
          views: {
            'side-menu21': {
              templateUrl: 'app/preference/preference.html',
              controller: 'preferenceCtrl'
            }
          }
        })

        .state('menu.event', {
          url: '/event',
          views: {
            'side-menu21': {
              templateUrl: 'app/event/myEvent.html',
              controller: 'myEventCtrl'
            }
          }
        })

        .state('menu.eventAdd', {
          url: '/eventAdd',
          views: {
            'side-menu21': {
              templateUrl: 'app/event/eventAdd.html',
              controller: 'eventAddCtrl'
            }
          }
        })

        .state('menu.login', {
          url: '/login',
          views: {
            'side-menu21': {
              templateUrl: 'app/auth/login/login.html',
              controller: 'loginCtrl'
            }
          }
        })

        .state('menu.signup', {
          url: '/signup',
          views: {
            'side-menu21': {
              templateUrl: 'app/auth/signup/signup.html',
              controller: 'signupCtrl'
            }
          }
        })

        .state('menu.passwordResetForm', {
          url: '/passwordResetForm',
          views: {
            'side-menu21': {
              templateUrl: 'app/auth/login/passwordResetForm.html',
              controller: 'passwordResetCtrl'
            }
          }
        })

        .state('menu', {
          url: '/side-menu21',
          templateUrl: 'app/menu/menu.html'
          //abstract:true

        })

      $urlRouterProvider.otherwise('/side-menu21/home')

    }]);
})();
