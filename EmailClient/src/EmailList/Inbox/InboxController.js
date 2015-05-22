angular.module('email-inbox')
	
	.controller('InboxController', function($timeout,$scope,$state,$http,configService){
		
		$scope.$parent.title = 'Odebrane';
		$scope.reload = $scope.$parent.reloadTime;
		$scope.emails = [];
		
		var list = element.find("ul");
		var interval = configService.getInboxInterval();
		
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
		
		$scope.getMails = setInterval(function() {
			$scope.getData();
			$scope.emails.reverse();
			
			for(var id in scope.emails) {
				list.append(prepareEmail(scope.emails[id]));
			}
		});
		
		var prepareEmail = function(email) {
			var listElement = document.createElement("li");
			listElement.id = email.id;
			
			var firstDiv = document.createElement("div");
			firstDiv.className = "emailList";
			var header = document.createElement("h3");
			header.innerHTMl = "Od: " + email.sender;
			var title = document.createElement("p");
			title.innerHTMl = "Tytuł: " + email.title;
			var content = document.createElement("p");
			content.className = "content";
			header.innerHTMl = email.content.substring(0,60)+ "...";
			
			var deleteButton = document.createElement("button");
			deleteButton.id = email.id;
			deleteButton.bind('click', function() { deleteEmail(email.id); });
			deleteButton.innerHTML = "Usuń";
			
			
			listElement.appendChild(firstDiv);
			listElement.appendChild(header);
			listElement.appendChild(title);
			listElement.appendChild(content);
			listElement.appendChild(deleteButton);
		};
		
		$scope.getMails();
});

