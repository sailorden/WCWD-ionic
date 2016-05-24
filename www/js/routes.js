angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/whereCanWeDance.html',
        controller: 'whereCanWeDanceCtrl'
      }
    }
  })

  .state('menu.salsaCubanWorkshop', {
    url: '/salsaW',
    views: {
      'side-menu21': {
        templateUrl: 'templates/salsaCubanWorkshop.html',
        controller: 'salsaCubanWorkshopCtrl'
      }
    }
  })

  .state('menu.preference', {
    url: '/preference',
    views: {
      'side-menu21': {
        templateUrl: 'templates/preference.html',
        controller: 'preferenceCtrl'
      }
    }
  })

  .state('menu.cloud', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cloud.html',
        controller: 'cloudCtrl'
      }
    }
  })

  .state('menu.event', {
    url: '/event',
    views: {
      'side-menu21': {
        templateUrl: 'templates/event.html',
        controller: 'eventCtrl'
      }
    }
  })

.state('menu.eventAdd', {
    url: '/eventAdd',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eventAdd.html',
        controller: 'eventAddCtrl'
      }
    }
  })

.state('menu.login', {
    url: '/login',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

.state('menu.logout', {
    url: '/login',
    views: {
      'side-menu21': {
        templateUrl: 'templates/logout.html',
        controller: 'logoutCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/home')



});
