angular.module('app')
.controller('newBlogCtrl', function($scope, blogSvc) {

    blogSvc.newEntry()
    .then(function(response) {
        console.log('new blog posted');
        $scope.entries = response.data;
    });
});