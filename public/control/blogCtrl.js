angular.module('app')
.controller('blogCtrl', function($scope, blogSvc, $state) {

    blogSvc.getAllEntries()
    .then(function(response) {
        $scope.entries = response;
    });

    $scope.createEntry = function(entry) {
        blogSvc.newEntry(entry)
        .then(function(response) {
            $state.go('entry', {id: response.id});
        });
    };
});