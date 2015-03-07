'use strict';

/**
 * @ngdoc overview
 * @name shapingUpWithAngularApp
 * @description
 * # shapingUpWithAngularApp
 *
 * Main module of the application.
 */
var app = angular
  .module('shapingUpWithAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
var gem = {
    name: 'gem 1',
    price: 2.95
  };

  app.controller('StoreController', function () {
    this.product = gem;
  });


