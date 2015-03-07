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
var gems = [
  {
    name: 'gem 1',
    price: 2.95,
    canPurchase: true,
    description: 'This is a description of our special gem',
    soldOut: false 
  },
  {
    name: 'gem 2',
    price: 2.95,
    canPurchase: true,
    description: 'This is a description of our special gem',
    soldOut: false
  }
];

  app.controller('StoreController', function () {
    this.products = gems;
  });


