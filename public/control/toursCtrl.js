angular.module('app')
.controller('toursCtrl', function($scope, toursSvc) {

    $scope.pwaces = toursSvc.pwaces;
});