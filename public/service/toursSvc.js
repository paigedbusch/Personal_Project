angular.module('app')
.service('toursSvc', function($stateParams, $http) {
    
    this.getAllTours = function() {
        return $http.get('/api/tours')
        .then(function(response) {
            return response.data;
        });
    };

    this.newTour = function(tour) {
        return $http.post('/api/new_tour', tour)
        .then(function(response) {
            return response.data;
        });
    };
});