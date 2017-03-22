angular.module('app')
.controller('toursCtrl', function($scope, $state, loginSvc, toursSvc) {

    loginSvc.getUser()
    .then(function(response) {
        $scope.user = response;
    });

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