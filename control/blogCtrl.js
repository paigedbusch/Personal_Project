angular.module('app')
.controller('blogCtrl', function($scope, blogSvc) {

    $scope.bwogs = blogSvc.bwogs;
});