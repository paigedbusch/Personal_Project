angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: './view/home.html',
        controller: 'homeCtrl'
    })
    .state('blog', {
        url: '/blog',
        templateUrl: './view/blog.html',
        controller: 'blogCtrl'
    })
    .state('entry', {
        url: '/blog/:id',
        templateUrl: './view/blogEntry.html',
        controller: 'blogEntryCtrl'
    })
    .state('tours', {
        url: '/tours',
        templateUrl: './view/tours.html',
        controller: 'toursCtrl'
    })
    .state('tour', {
        url: '/tours/:id',
        templateUrl: './view/tour.html',
        controller: 'tourCtrl'
    })
    .state('contact', {
        url: '/contact',
        templateUrl: './view/contact.html',
        controller: 'contactCtrl'
    })
    .state('admin', {
        url: '/admin',
        templateUrl: './view/admin.html',
        controller: 'adminCtrl'
    })
    .state('newBlog', {
        url: '/newBlog',
        templateUrl: './view/newBlog.html',
        controller: 'newBlogCtrl'
    })
    .state('newTour', {
        url: '/newTour',
        templateUrl: './view/newTour.html',
        controller: 'newTourCtrl'
    });

    $urlRouterProvider
    .otherwise('/home');
});