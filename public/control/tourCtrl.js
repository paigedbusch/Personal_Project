angular.module('app')
.controller('tourCtrl', function($scope, toursSvc) {

    $scope.tour = toursSvc.getTour();

    var dummyBlog = {
        title: 'This is a new blog',
        content: 'This is some content',
        image: 'This is an image'
    };


    $scope.updateTour = function() {
        tourSvc.updateTour(1, dummyBlog)
        .then(function(response) {
            console.log('tour ctrl working a');
            $scope.tour = response.data;
        });
    };

    // tourSvc.deleteTour()
    // .then(function(response) {
    //     console.log('tour ctrl working');
    //     $scope.tour = response.data;
    // });
});