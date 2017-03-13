angular.module('app')
.controller('tourCtrl', function($scope, toursSvc) {

    $scope.tour = toursSvc.getTour();
});