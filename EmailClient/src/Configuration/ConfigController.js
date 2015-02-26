angular.module('email-config')
	.controller('ConfigController', function($state,$scope,localStorageService){
	
		$scope.$parent.title = "Config";
		
		$scope.change = function(int){
			if (int === 1) {
				$scope.appTitle.style.background = 'Red';
				$scope.li.style.background = 'Salmon';
				$state.go('config');
			}
			else if (int === 2) {
				$scope.appTitle.style.background = 'Blue';
				$scope.li.style.background = 'Aqua';				
				$state.go('config');
			}
			else if (int === 3) {
				$scope.appTitle.style.background = 'Green';	
				$scope.li.style.background = 'PaleGreen';
				$state.go('config');
			}
		};
		
		$scope.refresh_time = function(int){

		};
		
		$scope.change();
		$scope.refresh_time();
});