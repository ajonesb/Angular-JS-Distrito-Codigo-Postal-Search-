var distritoControllers = angular.module('distritoControllers', []);

/*This controller below takes care of the List part of the 
application. Handles only the controller, not all of the application. */

distritoControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.distritos = data;
    $scope.distritoOrder = 'name';
  });
}]);
