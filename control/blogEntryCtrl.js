angular.module('app')
.controller('blogEntryCtrl', function($scope, $stateParams) {

    console.log($stateParams.id);
});