'use strict';

/**
 * @ngdoc function
 * @name shapingUpWithAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shapingUpWithAngularApp
 */
angular.module('shapingUpWithAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
