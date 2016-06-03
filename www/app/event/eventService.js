(function(){
  'use strict';

  angular
    .module('app.event')
    .factory('EventService', EventService);

  function EventService($firebaseAuth, $firebaseObject, $firebaseArray, $state, $firebaseRef, $ionicHistory, $rootScope){

    var authUser = $firebaseAuth($firebaseRef.default); // We are using angular-fire $firebaseAuth to return an auth object.
    var eventRef = $firebaseRef.default.child("events"); // event object
    var freeEventRef = $firebaseRef.default.child("free_events"); // free_events object
    var userRef = $firebaseRef.default.child("users"); // users object


    var eventObject =  {

      /**
       * Add new Event
       */
      addEvent: function(venueName, type, danceStyle, teacher, country, city, price, startDate, endDate, description, freeEvent){

        var newEventRef = eventRef.push();
        var eventId = newEventRef.key();
        var eventPrice = '';

        if(freeEvent){
          eventPrice = 'Free';
        }else{
          eventPrice = price;
        }

        newEventRef.set({
          venue: venueName,
          type: type,
          style: danceStyle,
          teacher: teacher,
          country: country,
          city: city,
          price: eventPrice,
          start_date: startDate,
          end_date: endDate,
          description: description,
          creator: authUser.$getAuth().uid,
          free_event: freeEvent
        });

        var eventObject = {};
        eventObject[eventId] = true;

        /**
         * If event is free then add in free event list
         */
        if(freeEvent){
          freeEventRef.update(eventObject);
        }

        /**
         * Add event to event owner's list of events
         */
        var userCreatedEvents = userRef.child(authUser.$getAuth().uid).child("created_events").update(eventObject);


        $ionicHistory.nextViewOptions({
          disableBack: true
        });
        $state.go('menu.home');
      }

    }
    return eventObject;
  }
})();
