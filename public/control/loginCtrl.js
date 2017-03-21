angular.module('app')
.controller('loginCtrl', function($scope, loginSvc, $state) {

    // function getUser() {
    //     loginSvc.getUser()
    //     .then(function(user) {
    //         if (user) $scope.user = user.username;
    //         else $scope.user = 'Not logged in';
    //     });
    // };

    // getUser();

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