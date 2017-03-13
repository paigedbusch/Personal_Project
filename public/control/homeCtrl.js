angular.module('app')
.controller('homeCtrl', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {

    $scope.goToAbout = function() {
        $location.hash('about');
        $anchorScroll();
    };
}]);