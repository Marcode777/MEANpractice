var meanApp = angular.module('angularApp', ['ngRoute']); 



meanApp.config(function($routeProvider){
  $routeProvider.when('/', {
       templateUrl: 'home.html',
       controller: 'appCtrl'
    });
});
meanApp.controller('appCtrl', function(){

});