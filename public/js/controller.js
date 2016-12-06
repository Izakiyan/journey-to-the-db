app.controller('appJrn', function ($scope,jrnService,$http) {

	$scope.addToDb = function () {

		$http.post('/journey', {data: $scope.input}).success(function (res) {
			console.log(res);
		})
	} 
});