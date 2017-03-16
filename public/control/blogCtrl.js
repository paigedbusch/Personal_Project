angular.module('app')
.controller('blogCtrl', function($scope, blogSvc) {

    $scope.bwogs = blogSvc.bwogs;
    blogSvc.getAllEntries().then(function(response) {
        console.log('controller something')
        $scope.entries = response.data;
    });
});