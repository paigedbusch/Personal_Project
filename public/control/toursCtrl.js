angular.module('app')
.controller('toursCtrl', function($scope, toursSvc, $state) {

    toursSvc.getAllTours()
    .then(function(response) {
        $scope.tours = response;
    });

    $scope.createTour = function(tour) {
        toursSvc.newTour(tour)
        .then(function(response) {
            $state.go('tour', {id: response.id});
        });
    };
});