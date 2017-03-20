angular.module('app')
.controller('tourCtrl', function($scope, toursSvc, $state) {

    $scope.updating = false;

    toursSvc.getTour()
    .then(function(response) {
        $scope.tour = response;
    });

    $scope.updateTour = function(tour) {
        toursSvc.updateTour(tour)
        .then(function(response) {
            $scope.tour = response;
            $scope.updating = false;
        });
    };

    $scope.deleteTour = function() {
        toursSvc.deleteTour()
        .then(function(response) {
            $state.go('tours');
        });
    };
});