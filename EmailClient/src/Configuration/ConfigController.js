angular.module('email-config')
	.controller('ConfigController', function($state,$scope){
	
		$scope.$parent.title = "Config";
	
		
		$scope.change = function(){
			$scope.appTitle.style.background = 'red';	
			$state.go('inbox');
		};
});