(function(){
  'use strict';

  angular
    .module('app.auth')

  /**
   * AuthService is going to handle all of our auth functions, so we don't need to write them inside the controllers.
   */
    .factory('AuthService', AuthService);

  function AuthService($firebaseAuth, $firebaseObject, $firebaseArray, $state, $firebaseRef){

    var authUser = $firebaseAuth($firebaseRef.default); // We are using angular-fire $firebaseAuth to return an auth object.

    return {
      /*
       The function receives an email, password, name and creates a new user
       After the user is created it stores the user details in the DB.
       */
      signupEmail: function(newEmail, newPassword, newFullName){

        /**
         * Here we're using angular-fire $createUser to create a new user, just passing the email, password and
         * full name.
         *
         * After that we're creating the record in the DB in a "userProfile" node, remember,
         * creating a user doesn't show him/her in the DB, so we need to create that record ourselves.
         *
         * And then we are catching any errors that might happen :P
         */
        console.log(newEmail);
        authUser.$createUser({
          email: newEmail,
          password: newPassword,
          fullName: newFullName
        }).then(function(authData){
          console.log(authData.provider, newEmail);
          $firebaseRef.default.child("users").child(authData.uid).set({
            name: newFullName,
            email: newEmail
          });
        }).catch(function(error){
          switch (error.code) {
            case "EMAIL_TAKEN":
              alert("Email already used!");
              break;
            case "INVALID_EMAIL":
              alert("Invalid email address!");
              break;
            default:
              alert("Error creating user:", error);
          }
        });
      },

      /**
       * Here we are login our user in, we user angular-fire $authWithPassword assing the email and password.
       * After that we send the user to our dashboard.
       */
      loginUser: function(email, password){
        authUser.$authWithPassword({
          "email": email,
          "password": password
        }).then (function(authData){
          $state.go('menu.home');
        }).catch(function(error){
          console.log(error);
        });
      },

      /**
       * This one explain itself, if the user doesn't remember his password he'll click in the "forgot you password?"
       * link and we need to send him a token so he can log in again
       *
       * NOTE: This doesn't send a reset password link, this sends a token he can use as a password to log in and
       * change his password to something he remembers.
       */
      resetPassword: function(resetEmail){
        authUser.$resetPassword({
          email: resetEmail
        }).then(function(){
          console.log('Password Reset Email was sent successfully');
        }).catch(function(error){
          console.log(error);
        });
      }

    }

  }
})();
