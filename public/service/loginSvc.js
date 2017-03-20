angular.module('app')
.service('loginSvc', function($http) {
    
    this.submitLogin = function(user) {
        return $http.post('/login', user)
        .then(function(response) {
            return response.data;
        });
    };
    this.getUser = function() {
        return $http.get('/auth/me')
        .then(function(response) {
            return response.data;
        });
    };
    this.logout = function() {
        return $http.get('/logout')
        .then(function(response) {
            return response.data;
        });
    };
});