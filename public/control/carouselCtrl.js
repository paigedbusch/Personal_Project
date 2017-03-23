angular.module('app')
.controller('carouselCtrl', function($scope) {
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.slides = [
        {
            image: '../public/image/escalante2.jpg',
            id: currIndex++
        },
        {
            image: '../public/image/grandcanyon1.jpg',
            id: currIndex++
        },
        {
            image: '../public/image/lakepowell6.jpg',
            id: currIndex++
        },
        {
            image: '../public/image/narrows6.jpg',
            id: currIndex++
        },
        {
            image: '../public/image/wave5.jpg',
            id: currIndex++
        }
    ]

    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
    };

    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    };
});