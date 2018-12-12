angular.module('myApp', []).
  controller('myController', ['$scope', '$http',
                              function($scope, $http) {
    $http.get('/user/profile')
        .success(function(data, status, headers, config) {
      $scope.user = data;
      $scope.error = "";
      $scope.recipes = data.recipes;
      console.log(data)
    }).
    error(function(data, status, headers, config) {
      $scope.user = {};
      $scope.recipes = [];
      $scope.error = data;
    });
  }]);