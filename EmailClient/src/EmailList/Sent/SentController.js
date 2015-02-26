angular.module('email-sent')
	
	.controller('SentController', function($scope,$state,$http){
		
		$scope.$parent.title = 'Wysłane';
		$scope.emails = [];
	
		$scope.getData = function(){
			$http.get('/sent').success(function(data) {
				$scope.emails=data;
				console.log(data);
			});
		};
		
		$scope.getDateByTimestamp = function (timeStamp){
	    	var date = new Date(timeStamp);
	    	var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	    	return date.getDate()+' '+months[date.getMonth()]+' '+date.getFullYear();   	
	    };
		
		$scope.getData();
		
});
