'use strict';

/**
 * @ngdoc function
 * @name shapingUpWithAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the shapingUpWithAngularApp
 */
angular.module('shapingUpWithAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
