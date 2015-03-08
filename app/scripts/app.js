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
    soldOut: false,
    time: new Date(),
    images: [
      { full: 'http://lorempixel.com/400/200',
        thumb: 'http://lorempixel.com/100/100'
    }
    ]
  },
  {
    name: 'gem 2',
    price: 10.95,
    canPurchase: true,
    description: 'This is a description of our special gem',
    soldOut: false,
    time: new Date(),
    images: [
      { full: 'http://lorempixel.com/400/200',
        thumb: 'http://lorempixel.com/100/100'
      }
    ]
  }
];

  app.controller('StoreController', function () {
    this.products = gems;
  });


