angular.module('email-view').
	controller('ViewController', function($stateParams, $scope, $http, $state){
		
		console.log("state:" + $stateParams.emailId);
		
		$scope.updateEmail = function () {
    		$http.put('/emails/'+ $stateParams.emailId, {
                read: true
    		}).success(function (data) {
    			$scope.udateEmailRes = data;
    		});
    	};
		
		$scope.getEmail = function () {
    		$http.get('/emails/'+$stateParams.emailId).success(function (data) {
    			$scope.mail = data;
    			$scope.updateEmail();
    			$scope.getDateByTimestamp(data.received);
    		});
    	};
		
		$scope.deleteEmail = function () {
    		$http.delete('/emails/'+ $stateParams.emailId, {
    		}).success(function (data) {
    			$scope.deleteEmailRes = data;
    			$state.go('inbox');
    		});
    	};
    	
    	$scope.getDateByTimestamp = function (timeStamp){
	    	var date = new Date(timeStamp);
	    	var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	    	$scope.date =  date.getDate()+' '+months[date.getMonth()]+' '+date.getFullYear();   	
	    };
    	
    	$scope.getEmail();
		
	});