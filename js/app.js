
/*Configured as a new module to take care of application and define how app handles 
navigating to different partials. */

var myApp = angular.module('myApp', [ /*Array specified below */
  'ngRoute', /*Feature that turns on deep linking, loads up different sub templates depending on
   url of page. */
  'distritoControllers' /*Specify Javascript that handles modules, would match name on controller.js 
  document*/
]);

//Partials below

myApp.config(['$routeProvider', function($routeProvider) { /*Executes function and passes along 
  route provide service */
  $routeProvider. /* This is what happens when someone navigates to one of the paths in our files
  such as list.html*/
  when('/list', { /* first path, when list.html is called*/
    templateUrl: 'partials/list.html', /*when list is called us this template url. */
    controller: 'ListController' /*Also use the controller called from the controller.js document.*/
  }).
  otherwise({ 
    redirectTo: '/list' /* Sets up a default when someone goes to homepage of website, redirect to 
    list partial*/
  });
}]);


