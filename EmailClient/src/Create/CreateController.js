angular.module('email-create')
	.controller('CreateController',function($state,$stateParams,$scope,$http){
		
		$scope.borders = false;
		$scope.$parent.title = "Napisz mail";
		$scope.mailValid=/^((\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)\s*[,]{0,1}\s*)+$/;
		
		if ($stateParams.emailId!==""){
			$http.get('/emails/'+$stateParams.emailId).success(function (data) {
    			console.log(data.title);
    			$scope.mailTitle = "Re: "+ data.title;
    			$scope.receivers = data.sender;
    			$scope.content = "\n\n\n" + data.sender + " napisał/a:\n\n" + data.content;
    		});
			
		}
				
		$scope.send = function(){
			
			$scope.borders = true;
						
			if($scope.NewMail.$valid){
				$scope.adr = $scope.receivers.split(",");

				$http.post('/sent', {
		        	id: Date.now(),
		        	title: $scope.mailTitle,
		        	content: $scope.content,
		        	receivers: $scope.adr,
		        	sent: Date.now()
		        }).success(function (data) {
		        	$scope.createSentRes = data;
		        	$scope.reset();
			    	$state.go('sent');
			    });
		    }
		};
		
		
		
		$scope.reset = function(){
			$scope.receivers = "";
			$scope.mailTitle = "";
			$scope.content = "";
			$scope.borders=false;
		};
		
	});
