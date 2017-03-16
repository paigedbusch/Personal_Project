angular.module('app')
.controller('loginCtrl', function($scope, loginSvc) {

    $scope.submitLogin = function(user) {
        debugger;
        loginSvc.submitLogin(user).then(function(response) {
            console.log(response);
        })
    }
});