angular.module('app')
.controller('toursCtrl', function($scope, toursSvc) {

    $scope.pwaces = toursSvc.pwaces;

    toursSvc.getAllTours()
    .then(function(response) {
        console.log('tour ctrl working');
        $scope.tours = response.data;
    });
});