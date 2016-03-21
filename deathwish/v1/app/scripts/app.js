'use strict';

/**
 * @ngdoc overview
 * @name deathwishApp
 * @description
 * # deathwishApp
 *
 * Main module of the application.
 */
angular
  .module('deathwishApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/main',{
        templateUrl: 'views/main.html' ,       
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/main1',{
        templateUrl: 'views/main1.html' ,       
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
