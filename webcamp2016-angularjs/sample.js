angular.module('orderByExample3', [])
.controller('ExampleController', ['$scope', 'orderByFilter', function($scope, orderBy) {
  var friends = [
    {name: 'John',   phone: '555-1212',  age: 1},
    {name: 'Mary',   phone: '555-9876',  age: 7},
    {name: 'Mike',   phone: '555-4321',  age: 5},
    {name: 'Adam',   phone: '555-5678',  age: 10},
    {name: 'Julie',  phone: '555-8765',  age: 0}
  ];

  $scope.propertyName = 'age';
  $scope.reverse = true;
  $scope.friends = orderBy(friends, $scope.propertyName, $scope.reverse);

  $scope.sortBy = function(propertyName) {
    $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
        ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
    $scope.friends = orderBy(friends, $scope.propertyName, $scope.reverse);
  };

  $scope.propertyName = 'name';
  $scope.reverse = true;
  $scope.friends = orderBy(friends, $scope.propertyName, $scope.reverse);

  $scope.sortBy = function(propertyName) {
    $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
        ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
    $scope.friends = orderBy(friends, $scope.propertyName, $scope.reverse);
  };

  $scope.propertyName = 'phone';
  $scope.reverse = true;
  $scope.friends = orderBy(friends, $scope.propertyName, $scope.reverse);

  $scope.sortBy = function(propertyName) {
    $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
        ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
    $scope.friends = orderBy(friends, $scope.propertyName, $scope.reverse);
  };


}]);