angular.module('app')
.service('loginSvc', function($http) {
    
    this.submitLogin = function(user) {
        return $http({
            method: 'POST',
            url: '/login',
            data: user
        }).then(function(response) {
            return response.data;
        });
    }; 
});