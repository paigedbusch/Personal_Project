angular.module('app')
.service('newTourSvc', function($http) {

    this.newTour = function() {
        return $http.post('/api/new_tour')
        .then(function(response) {
            console.log('new tour posted svc');
            return response.data;
        });
    };
});