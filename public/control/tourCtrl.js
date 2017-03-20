angular.module('app')
.controller('tourCtrl', function($scope, tourSvc, $state) {

    $scope.updating = false;

    tourSvc.getTour()
    .then(function(response) {
        $scope.tour = response;
    });

    $scope.updateTour = function(tour) {
        tourSvc.updateTour(tour)
        .then(function(response) {
            $scope.tour = response;
            $scope.updating = false;
        });
    };

    $scope.deleteTour = function() {
        tourSvc.deleteTour()
        .then(function(response) {
            $state.go('tours');
        });
    };
});