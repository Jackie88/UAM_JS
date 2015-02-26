(function(){
	
	var app = angular.module('email-view', []);

	app.config(function($stateProvider){
		$stateProvider
			.state('respond', {
		        url: '/create/:receviers/:title',
		        controller:'RepsponController' 
	    });
		
	});
	
})();
