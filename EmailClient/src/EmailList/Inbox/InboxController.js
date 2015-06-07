angular.module('email-inbox')
	
	.controller('InboxController', function($timeout,$scope,$state,$http,configService,emailsData){
		
		$scope.$parent.title = 'Odebrane';
		$scope.reload = 5000;
		
		var interval = configService.getInboxInterval();
		
		$scope.getData = function(){
			emailsData.getEmails().then(function(response) {
				$scope.emails=response.data;
			});
		};
		
		$scope.deleteEmail = function (mailId) {
			console.log('usuwam '+mailId);
    		emailsData.deleteEmail(mailId).then(function(response) {
    			$scope.deleteEmail(mailId);
    		});
    	};
		
		$scope.getData();
		
		$scope.intervalFunction = function(){
			$scope.timer = $timeout(function() {
		    	$scope.getData();
				$scope.intervalFunction();
		    }, interval);
		};
		  
		$scope.intervalFunction();

		$scope.$on("$destroy", function() {
			if($scope.timer) {
				$timeout.cancel($scope.timer);
			}
		});
		
})

.factory("emailsData", function($http) {

	getEmails = function() {
		return $http.get('/emails');
	};

	deleteEmail = function(id) {
		$http.delete('/emails/'+ id);
	};

	return {
		getEmails: getEmails,
		deleteEmail: deleteEmail
	};
})

;

