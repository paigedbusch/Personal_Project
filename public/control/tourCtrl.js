angular.module('app')
.controller('tourCtrl', function($scope, $state, loginSvc, tourSvc) {

    $scope.updating = false;

    loginSvc.getUser()
    .then(function(response) {
        $scope.user = response;
    });

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