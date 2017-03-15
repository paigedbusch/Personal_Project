angular.module('app')
    .directive('carouselDirective', function () {
        return {
            restrict: 'E',
            templateUrl: './directive/carouselTmpl.html',
            controller: 'carouselCtrl'
        }
    });