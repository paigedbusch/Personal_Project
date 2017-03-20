angular.module('app')
.controller('blogEntryCtrl', function($scope, blogEntrySvc, $state) {

    $scope.editing = false;
    $scope.entry = blogSvc.getEntry();

    blogEntrySvc.getEntry()
    .then(function(response) {
        $scope.entry = response;
    });

    $scope.updateEntry = function(entry) {
        blogEntrySvc.updateEntry(entry)
        .then(function(response) {
            $scope.entry = response;
            $scope.editing = false;
        });
    };

    $scope.deleteEntry = function() {
        blogEntrySvc.deleteEntry()
        .then(function(response) {
            $state.go('blog');
        });
    };
});