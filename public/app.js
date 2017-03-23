angular.module('app', ['ui.router', 'ui.bootstrap'])
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: '../public/view/home.html',
        controller: 'homeCtrl'
    })
    .state('blog', {
        url: '/blog',
        templateUrl: '../public/view/blog.html',
        controller: 'blogCtrl'
    })
    .state('entry', {
        url: '/blog/:id',
        templateUrl: '../public/view/blogEntry.html',
        controller: 'blogEntryCtrl'
    })
    .state('tours', {
        url: '/tours',
        templateUrl: '../public/view/tours.html',
        controller: 'toursCtrl'
    })
    .state('tour', {
        url: '/tours/:id',
        templateUrl: '../public/view/tour.html',
        controller: 'tourCtrl'
    })
    .state('contact', {
        url: '/contact',
        templateUrl: '../public/view/contact.html',
        controller: 'contactCtrl'
    })
    .state('login', {
        url: '/login',
        templateUrl: '../public/view/login.html',
        controller: 'loginCtrl'
    });

    $urlRouterProvider
    .otherwise('/home');
});