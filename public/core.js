var dojoReview= angular.module('dojoReview', []);

function mainController($scope, $http) {
	$scope.formData = {};

	$http.get('/api/reviews')
		.success(function(data) {
			$scope.reviews = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

		$scope.greaterThan = function(prop, val){
	    return function(item){
	      return item[prop] > val;
	    }
	};

	$scope.createReview = function() {
		$http.post('/api/reviews', $scope.formData)
			.success(function(data) {
				$scope.formData = {};
				$scope.reviews = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	$scope.deleteReview = function(id) {
		$http.delete('/api/reviews/' + id)
			.success(function(data) {
				$scope.reviews = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	$scope.random = function(){
    return 0.5 - Math.random();
	};
}
