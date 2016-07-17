var BookStore = angular.module('BookStore', []);

BookStore.controller('BookController', function($scope){
	$scope.books = [
		{ 
			title  : 'The Life-Changing Magic of Tidying Up: The Japanese Art of Decluttering and Organizing', 
			author : 'Marie Kondo', 
			price  : '9.68' 
		},
		{ 
			title  : 'First 100 Words', 
			author : 'Roger Priddy', 
			price  : '3.19' 
		},
		{ 
			title  : 'Quieting Your Heart: 6-Month Bible-Study Journal', 
			author : 'Darlene Schacht', 
			price  : '7.14' 
		},
		{ 
			title  : 'Modular Web Design', 
			author : 'Nathan Curtis', 
			price  : '119.25' 
		},
		{ 
			title  : 'Making Ideas Happen', 
			author : 'Scott Belsky', 
			price  : '30.00' 
		},
		{ 
			title  : 'Object Oriented JS', 
			author : 'Stoyan Stefanov', 
			price  : '50.55' 
		},
		{ 
			title  : 'Adaptive Web Design', 
			author : 'Aaron Gustafson', 
			price  : '150.75' 
		},
	];

	$scope.save = function() {
		$scope.books.push({
			title : $scope.title,
			author: $scope.author,
			price : $scope.price
		});

		$scope.reset();
	};

	$scope.reset = function() {
		$scope.title = '';
		$scope.author = '';
		$scope.price = '';
	};
});