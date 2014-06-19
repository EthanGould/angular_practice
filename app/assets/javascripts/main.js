var ApeApp = angular.module('ApeApp', ['ngRoute']);

ApeApp.config(['$routeProvider', function($routeProvider){
  //default route
  $routeProvider.when('/',{
    templateUrl: '../assets/mainIndex.html',
    controller: 'IndexController'
  });
}]);
