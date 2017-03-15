angular.module('app')
.controller('carouselCtrl', function($scope) {
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.slides = [
        {
            image: '../image/timp4.jpg',
            id: currIndex++
        },
        {
            image: '../image/arches_1.jpg',
            id: currIndex++
        },
        {
            image: '../image/mesa_verde_1.jpg',
            id: currIndex++
        },
        {
            image: '../image/wave_1.jpg',
            id: currIndex++
        },
        {
            image: '../image/narrows1.jpg',
            id: currIndex++
        }
    ]

    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
    };

    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }
});