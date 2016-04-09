var meanApp = angular.module('meanApp', ['ngRoute']); 



meanApp.config(function($routeProvider){
  $routeProvider
    .otherwise({
      redirectTo: '/index.html',
      templateUrl: 'home.html'
    });
    // .when({
    //   templateUrl: 'home.html',
    //   controller: 'appCtrl'
    // });
});
meanApp.controller("appCtrl" , function() {

});