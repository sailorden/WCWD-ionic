(function(){
  'use strict';

  angular
    .module('app.event')
    .controller('eventAddCtrl', eventAddCtrl);

  eventAddCtrl.$inject = ['$scope', 'EventService'];

  function eventAddCtrl ($scope, EventService) {
    $scope.data = {};
    $scope.isNotFree = true;

    $scope.eventAdd = function(){
      var venueName = $scope.data.venueName;
      var type = $scope.data.type;
      var danceStyle = $scope.data.danceStyle;
      var teacher = $scope.data.teacher;
      var country = $scope.data.country;
      var city = $scope.data.city;
      var price = $scope.data.price;
      var startDate = $scope.data.startDate;
      var endDate = $scope.data.endDate;
      var description = $scope.data.description;
      var freeEvent = $scope.data.free;

      EventService.addEvent(venueName, type, danceStyle, teacher, country, city, price, startDate, endDate, description, freeEvent);
    }

    /**
     * Toggle Price Field
     */
    $scope.freeToggle = function(){
      var isFree = $scope.data.free;
      $scope.isNotFree = !isFree;
    }

  }

})();
