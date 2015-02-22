(function(){

	var app = angular.module('emailApp', ['ui.router','email-inbox','email-sent','email-view','email-create','email-config']);
	
	app.controller('mainController',function($scope){
		
		$scope.title = "Welcome";
		$scope.reloadTime = 31000;
		
	});
	//app.config(function (localStorageServiceProvider) {
	//  localStorageServiceProvider.prefix = 'mailApp';
	//});
	
	app.config(function($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.otherwise('/home');
		
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'src/welcome.html',
				//controller: 'welcomeController'
			}).state('view', {
				url: '/view/:emailId',
				templateUrl: 'src/ViewMail/view.html',
				controller: 'ViewController'
			}).state('inbox', {
				url: '/inbox',
				templateUrl: 'src/EmailList/Inbox/inbox.html',
				controller: 'InboxController'
			}).state('sent', {
				url: '/sent',
				templateUrl: 'src/EmailList/Sent/sent.html',
				//controller: 'SentController'
			}).state('create', {
				url: '/create',
				templateUrl: 'src/NewMail/create.html',
				//controller: 'CreateController'
			}).state('config', {
				url: '/config',
				templateUrl: 'src/Configuration/config.html',
				//controller: 'ConfigController'
			});
		});
		
})();