angular.module('app')
.controller('newTourCtrl', function($scope, toursSvc) {

    toursSvc.newTour()
    .then(function(response) {
        console.log('new tour posted');
        $scope.tours = response.data;
    });
});