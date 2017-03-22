angular.module('app')
.controller('carouselCtrl', function($scope) {
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.slides = [
        {
            image: '../image/escalante2.jpg',
            id: currIndex++
        },
        {
            image: '../image/grandcanyon1.jpg',
            id: currIndex++
        },
        {
            image: '../image/lakepowell6.jpg',
            id: currIndex++
        },
        {
            image: '../image/narrows6.jpg',
            id: currIndex++
        },
        {
            image: '../image/wave5.jpg',
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