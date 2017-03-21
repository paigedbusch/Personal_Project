angular.module('app')
.controller('blogEntryCtrl', function($scope, blogEntrySvc, $state, loginSvc) {

    $scope.editing = false;

    loginSvc.getUser()
    .then(function(response) {
        $scope.user = response;
    });

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