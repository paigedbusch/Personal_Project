angular.module('app')
.service('toursSvc', function($http, $stateParams) {
    
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