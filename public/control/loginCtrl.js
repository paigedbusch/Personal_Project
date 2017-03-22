angular.module('app')
.controller('loginCtrl', function($scope, $state, loginSvc) {

    $scope.submitLogin = function(username, password) {
        loginSvc.submitLogin(username, password)
        .then(function(response) {
            if (response === 'Unauthorized') {
                alert('Incorrect username or password');
            } else {
                $state.go('home');
            }
        });
    };

    $scope.logout = loginSvc.logout;
});