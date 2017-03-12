angular.module('app')
.directive('scrollDirective', function() {

    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            elem.on('click', function() {
                ('body, html').animate({
                    scrollTop: ('#about').offset().top
                }, 500);
            });
        }
    }
});