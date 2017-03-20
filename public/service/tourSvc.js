angular.module('app')
.service('tourSvc', function($http, $stateParams) {

    this.getTour = function() {
        console.log($stateParams.id)
        return $http.get('/api/tours/' + $stateParams.id)
        .then(function(response) {
            return response.data;
        });
    };

    this.updateTour = function(tour) {
        return $http.put('/api/update_tour', tour)
        .then(function(response) {
            return response.data;
        });
    };
    
    this.deleteTour = function() {
        return $http.delete('/api/delete_tour/' + $stateParams.id)
        .then(function(response) {
            return response.data;
        });
    };
});