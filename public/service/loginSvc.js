angular.module('app')
.service('loginSvc', function($http, $stateParams) {
    
    this.submitLogin = function(username, password) {
        return $http.post('/login', {username: username, password: password})
        .then(function success(response) {
            return response.data;
        }, function err(err) {
            return err.data;
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