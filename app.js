angular.module('orderByExample3', [])
.controller('ExampleController', ['$scope', 'orderByFilter', function($scope, orderBy) {
  var friends = [
    {name: 'A',   phone: '3',  age: 10},
    {name: 'C',   phone: '4',  age: 19},
    {name: 'W',   phone: '6',  age: 21},
    {name: 'Z',   phone: '2',  age: 35},
    {name: 'Z',   phone: '2',  age: 35},
    {name: 'Z',   phone: '2',  age: 35},
    {name: 'b',  phone: '1',  age: 29}
  ];


  $scope.propertyName = 'age';
  $scope.reverse = true;
  $scope.friends = orderBy(friends, $scope.propertyName, $scope.reverse);

  $scope.itemLimits = friends.length;
  $scope.limits = [5,10,20,50,100];

  $scope.sortBy = function(propertyName) {
    $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
        ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
    $scope.friends = orderBy(friends, $scope.propertyName, $scope.reverse);
  };
}]);