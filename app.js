'use strict';

// Declare app level module which depends on views, and components
angular.module('ECommercetemplate', [
  'ngRoute',
  'ECommercetemplate.view1',
  'ECommercetemplate.view2',
  'ECommercetemplate.template'
])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/template'});
}]);
