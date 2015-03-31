(function(){

	var app = angular.module('emailApp', ['ui.router','email-inbox','email-sent','email-view','email-create','email-config']);
	
	app.controller('mainController',function($scope, ConfigService){
		
		$scope.title = "Welcome";
		$scope.reloadTime = 31000;
		
		var initialize = function() {
			var skinLoad = configService.getSkinVariant();
			$rootScope.skinVariant = skinLoad;
		};
		
		initialize();
		
		$rootScope.$on("updateSkin", function(event,skinVariant) {
			$rootScope.skinVariant = skinVariant;
		});
	})
		
	//app.config(function (localStorageServiceProvider) {
	//  localStorageServiceProvider.prefix = 'mailApp';
	//});
	
	app.config(function($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.otherwise('/home');
		
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'src/Welcome.html',
				//controller: 'welcomeController'
			}).state('view', {
				url: '/view/:emailId',
				templateUrl: 'src/ViewMail/View.html',
				controller: 'ViewController'
			}).state('inbox', {
				url: '/inbox',
				templateUrl: 'src/EmailList/Inbox/Inbox.html',
				controller: 'InboxController'
			}).state('sent', {
				url: '/sent',
				templateUrl: 'src/EmailList/Sent/Sent.html',
				controller: 'SentController'
			}).state('create', {
				url: '/create/:emailId',
				templateUrl: 'src/Create/Create.html',
				controller: 'CreateController'
			}).state('config', {
				url: '/config',
				templateUrl: 'src/Configuration/Config.html',
				controller: 'ConfigController'
			});
		});
		
})();