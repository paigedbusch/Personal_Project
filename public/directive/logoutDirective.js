angular.module('app')
.directive('logoutDirective', function () {
    
    return {
        restrict: 'E',
        templateUrl: './directive/logoutTmpl.html',
        controller: function($scope, loginSvc) {
            loginSvc.getUser()
            .then(function(response) {
                $scope.user = response;
            });
            $scope.logout = function() {
                loginSvc.logout()
                .then(function(response) {
                    $scope.user = null;
                });
            };
        }
    };
});