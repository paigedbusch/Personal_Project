angular.module('app')
.controller('blogEntryCtrl', function($scope, blogSvc) {

    $scope.entry = blogSvc.getEntry();
});