angular.module('email-inbox')
	.controller('InboxController', function($timeout,$scope,$state,$http){
		console.log('wywolanieinbox ctrl');
		
		$scope.$parent.title = 'Odebrane';
		$scope.reload = $scope.$parent.reloadTime;
		$scope.emails = [];
	
		$scope.getData = function(){
			$http.get('/emails').success(function(data) {
				$scope.emails=data;
				console.log($scope.emails);
			});
		};
		
		$scope.getData();
		
		$scope.intervalFunction = function(){
			$timeout(function() {
		    	$scope.getData();
				$scope.intervalFunction();
				console.log('interwal co:' + $scope.reload);
		    }, $scope.reload);
		};
		  
		$scope.intervalFunction();
});

