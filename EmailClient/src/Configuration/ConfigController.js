angular.module('email-config')
	.controller('ConfigController', function($state,$scope,localStorageService){
	
		$scope.$parent.title = "Config";
		
		$scope.skins = [{ "value": "default", "text": "default" }, { "value": "green", "text": "green" }, { "value": "yellow", "text": "yellow" }];
		
		$scope.save_options = function() {
			configService.setInboxInterval($scope.interval);
			configService.setSkinVariant($scope.skinVariant);
			$rootScope.$emit("updateSkin", $scope.skinVariant);
		};
		
		var initialize = function() {
			$scope.interval = configService.getInboxInterval();
			$scope.skinVariant = configService.getSkinVariant();
		};
		
		initialize();
});