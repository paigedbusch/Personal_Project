angular.module('app')
    .directive('carouselDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '../public/directive/carouselTmpl.html',
            controller: 'carouselCtrl'
        }
    });