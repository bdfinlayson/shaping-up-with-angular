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
  app.controller('StoreController', function () {
    this.products = [
  {
    name: 'gem 1',
    price: 2.95,
    canPurchase: true,
    description: 'This is a description of our special product',
    soldOut: false,
    time: new Date(),
    reviews: [
      {
        stars: 5,
        body: 'I love this product',
        author: 'bdfinlayson@gmail.com'
      },
      {
        stars: 3,
        body: 'It was so-so',
        author: 'noneofyourbusiness@anonymous.com'
      }
    ],
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
    description: 'This is a description of our special product',
    soldOut: false,
    time: new Date(),
    reviews: [
        {
          stars: 5,
          body: 'I love this product',
          author: 'bdfinlayson@gmail.com'
        },
        {
          stars: 3,
          body: 'It was so-so',
          author: 'noneofyourbusiness@anonymous.com'
        }
      ],
      images: [
      { full: 'http://lorempixel.com/400/200',
        thumb: 'http://lorempixel.com/100/100'
      }
    ]
  }
];



  });

  app.controller('PanelController', function() {
    this.tab = 1;
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('ReviewForm', function() {
    this.review = {};
    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });
  
  app.directive('productNav', function() {
    return {
      restrict: 'E',
      templateUrl: '../snippits/product-nav.html'
    };
  });
