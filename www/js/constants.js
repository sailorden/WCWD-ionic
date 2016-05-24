/**
 * Created by Abhishek on 5/23/2016.
 */
angular.module('app')

    .constant('AUTH_EVENTS', {
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    })

    .constant('USER_ROLES', {
        user: 'user_role',
        public: 'public_role'
    });