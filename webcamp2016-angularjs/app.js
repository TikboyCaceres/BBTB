angular.module('orderByExample3', [])
.controller('ExampleController', ['$scope', 'orderByFilter', function($scope, orderBy) {
  var friends = [
    {name: 'Column 1',   phone: '1',  age: 10},
    {name: 'Column 2',   phone: '2',  age: 19},
    {name: 'Column 3',   phone: '3',  age: 21},
    {name: 'Column 4',   phone: '4',  age: 35},
    {name: 'Column 5',  phone: '5',  age: 29}
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
}]);