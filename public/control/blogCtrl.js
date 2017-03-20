angular.module('app')
.controller('blogCtrl', function($scope, blogSvc) {

    // $scope.bwogs = blogSvc.bwogs;

    blogSvc.getAllEntries()
    .then(function(response) {
        $scope.entries = response; //creating a var on $scope called entries
    });
});