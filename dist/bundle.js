'use strict';

angular.module('app', ['ui.router', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: '../public/view/home.html',
        controller: 'homeCtrl'
    }).state('blog', {
        url: '/blog',
        templateUrl: '../public/view/blog.html',
        controller: 'blogCtrl'
    }).state('entry', {
        url: '/blog/:id',
        templateUrl: '../public/view/blogEntry.html',
        controller: 'blogEntryCtrl'
    }).state('tours', {
        url: '/tours',
        templateUrl: '../public/view/tours.html',
        controller: 'toursCtrl'
    }).state('tour', {
        url: '/tours/:id',
        templateUrl: '../public/view/tour.html',
        controller: 'tourCtrl'
    }).state('contact', {
        url: '/contact',
        templateUrl: '../public/view/contact.html',
        controller: 'contactCtrl'
    }).state('login', {
        url: '/login',
        templateUrl: '../public/view/login.html',
        controller: 'loginCtrl'
    });

    $urlRouterProvider.otherwise('/home');
});
'use strict';

angular.module('app').controller('blogCtrl', function ($scope, $state, blogSvc, loginSvc) {

    loginSvc.getUser().then(function (response) {
        $scope.user = response;
    });

    blogSvc.getAllEntries().then(function (response) {
        $scope.entries = response;
    });

    $scope.createEntry = function (entry) {
        blogSvc.newEntry(entry).then(function (response) {
            $state.go('entry', { id: response.id });
            $scope.entry = response;
        });
    };
});
'use strict';

angular.module('app').controller('blogEntryCtrl', function ($scope, $state, blogEntrySvc, loginSvc) {

    $scope.editing = false;

    loginSvc.getUser().then(function (response) {
        $scope.user = response;
    });

    blogEntrySvc.getEntry().then(function (response) {
        $scope.entry = response;
    });

    $scope.updateEntry = function (entry) {
        blogEntrySvc.updateEntry(entry).then(function (response) {
            // $scope.entry = response;
            $scope.editing = false;
        });
    };

    $scope.deleteEntry = function () {
        blogEntrySvc.deleteEntry().then(function (response) {
            $state.go('blog');
        });
    };
});
'use strict';

angular.module('app').controller('carouselCtrl', function ($scope) {
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.slides = [{
        image: '../public/image/escalante2.jpg',
        id: currIndex++
    }, {
        image: '../public/image/grandcanyon1.jpg',
        id: currIndex++
    }, {
        image: '../public/image/lakepowell6.jpg',
        id: currIndex++
    }, {
        image: '../public/image/narrows6.jpg',
        id: currIndex++
    }, {
        image: '../public/image/wave5.jpg',
        id: currIndex++
    }];

    $scope.addSlide = function () {
        var newWidth = 600 + slides.length + 1;
    };

    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    };
});
'use strict';

angular.module('app').controller('contactCtrl', function ($scope) {});
'use strict';

angular.module('app').controller('homeCtrl', ['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {

    $scope.goToAbout = function () {
        $location.hash('about');
        $anchorScroll();
    };
}]);
'use strict';

angular.module('app').controller('loginCtrl', function ($scope, $state, loginSvc) {

    $scope.submitLogin = function (username, password) {
        loginSvc.submitLogin(username, password).then(function (response) {
            if (response === 'Unauthorized') {
                alert('Incorrect username or password');
            } else {
                $state.go('home');
            }
        });
    };

    $scope.logout = loginSvc.logout;
});
'use strict';

angular.module('app').controller('tourCtrl', function ($scope, $state, loginSvc, tourSvc) {

    $scope.updating = false;

    loginSvc.getUser().then(function (response) {
        $scope.user = response;
    });

    tourSvc.getTour().then(function (response) {
        $scope.tour = response;
    });

    $scope.updateTour = function (tour) {
        tourSvc.updateTour(tour).then(function (response) {
            $scope.tour = response;
            $scope.updating = false;
        });
    };

    $scope.deleteTour = function () {
        tourSvc.deleteTour().then(function (response) {
            $state.go('tours');
        });
    };
});
'use strict';

angular.module('app').controller('toursCtrl', function ($scope, $state, loginSvc, toursSvc) {

    loginSvc.getUser().then(function (response) {
        $scope.user = response;
    });

    toursSvc.getAllTours().then(function (response) {
        $scope.tours = response;
    });

    $scope.createTour = function (tour) {
        toursSvc.newTour(tour).then(function (response) {
            $state.go('tour', { id: response.id });
        });
    };
});
'use strict';

angular.module('app').service('blogEntrySvc', function ($http, $stateParams) {

    this.getEntry = function () {
        return $http.get('/api/blog/' + $stateParams.id).then(function (response) {
            return response.data;
        });
    };

    this.updateEntry = function (entry) {
        return $http.put('/api/update_blog', entry).then(function (response) {
            return response.data;
        });
    };

    this.deleteEntry = function () {
        return $http.delete('/api/delete_blog/' + $stateParams.id).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('app').service('blogSvc', function ($http, $stateParams) {

    this.getAllEntries = function () {
        return $http.get('/api/blog').then(function (response) {
            return response.data;
        });
    };

    this.newEntry = function (entry) {
        console.log(entry);
        return $http.post('/api/new_blog', entry).then(function (response) {
            console.log(response);
            return response.data;
        });
    };
});
'use strict';

angular.module('app').service('contactSvc', function () {});
'use strict';

angular.module('app').service('homeSvc', function () {});
'use strict';

angular.module('app').service('loginSvc', function ($http, $stateParams) {

    this.submitLogin = function (username, password) {
        return $http.post('/login', { username: username, password: password }).then(function success(response) {
            return response.data;
        }, function err(err) {
            return err.data;
        });
    };

    this.getUser = function () {
        return $http.get('/auth/me').then(function (response) {
            return response.data;
        });
    };

    this.logout = function () {
        return $http.get('/logout').then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('app').service('tourSvc', function ($http, $stateParams) {

    this.getTour = function () {
        console.log($stateParams.id);
        return $http.get('/api/tours/' + $stateParams.id).then(function (response) {
            return response.data;
        });
    };

    this.updateTour = function (tour) {
        return $http.put('/api/update_tour', tour).then(function (response) {
            return response.data;
        });
    };

    this.deleteTour = function () {
        return $http.delete('/api/delete_tour/' + $stateParams.id).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('app').service('toursSvc', function ($http, $stateParams) {

    this.getAllTours = function () {
        return $http.get('/api/tours').then(function (response) {
            return response.data;
        });
    };

    this.newTour = function (tour) {
        return $http.post('/api/new_tour', tour).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('app').directive('cardDirective', function () {

    return {
        restrict: 'E',
        scope: {
            item: '='
        },
        templateUrl: '../public/directive/cardTmpl.html'
    };
});
'use strict';

angular.module('app').directive('carouselDirective', function () {
    return {
        restrict: 'E',
        templateUrl: '../public/directive/carouselTmpl.html',
        controller: 'carouselCtrl'
    };
});
'use strict';

angular.module('app').directive('footerDirective', function () {

    return {
        templateUrl: '../public/directive/footerTmpl.html'
    };
});
'use strict';

angular.module('app').directive('headerDirective', function () {

    return {
        templateUrl: '../public/directive/headerTmpl.html'
    };
});
'use strict';

angular.module('app').directive('logoutDirective', function () {

    return {
        restrict: 'E',
        templateUrl: '../public/directive/logoutTmpl.html',
        controller: function controller($scope, loginSvc) {
            loginSvc.getUser().then(function (response) {
                $scope.user = response;
            });
            $scope.logout = function () {
                loginSvc.logout().then(function (response) {
                    $scope.user = null;
                });
            };
        }
    };
});
//# sourceMappingURL=bundle.js.map
