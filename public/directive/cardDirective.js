angular.module('app')
.directive('cardDirective', function() {


    return {
        restrict: 'E',
        scope: {
            item: '=',
        },
        templateUrl: '../public/directive/cardTmpl.html'
    }
})