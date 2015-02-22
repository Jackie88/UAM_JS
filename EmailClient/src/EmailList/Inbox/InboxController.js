angular.module('email-inbox')
	
	.controller('InboxController', function($timeout,$scope,$state,$http){
		
		$scope.$parent.title = 'Odebrane';
		$scope.reload = $scope.$parent.reloadTime;
		$scope.emails = [];
	
		$scope.getData = function(){
			$http.get('/emails').success(function(data) {
				$scope.emails=data;
			});
		};
		
		$scope.deleteEmail = function (mailId) {
			console.log('usuwam '+mailId);
    		$http.delete('/emails/'+mailId, {
    		}).success(function (data) {
    			$scope.getData();
     		});
    	};
		
		$scope.getData();
		
		$scope.intervalFunction = function(){
			$timeout(function() {
		    	$scope.getData();
				$scope.intervalFunction();
		    }, $scope.reload);
		};
		  
		$scope.intervalFunction();
});

