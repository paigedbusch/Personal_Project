angular.module('app')
.controller('blogEntryCtrl', function($scope, blogEntrySvc, $state) {

    // $scope.entry = blogSvc.getEntry();

    blogEntrySvc.getEntry()
    .then(function(response) {
        $scope.entry = response;
    });

    // blogEntrySvc.updateEntry()
    // .then(function(response) {
    //     console.log('blogentry ctrl working a');
    //     $scope.entry = response;
    // });


    $scope.deleteEntry = function() {
        blogEntrySvc.deleteEntry()
        .then(function(response) {
            $state.go('blog');
        });
    };
});