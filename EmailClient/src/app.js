(function(){

	var app = angular.module('emailClient', ['ui.router']);

    app.controller('MainController', function($scope) {
		
		this.title = "sieeema";
		
		this.setTitle = function(newTitle) {
			this.title = newTitle;	
		};
		
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
				controller: 'MainController'
			}).state('inbox', {
				url: '/inbox',
				templateUrl: 'src/EmailList/Inbox/inbox.html',
				//controller: 'InboxController'
			}).state('sent', {
				url: '/sent',
				templateUrl: 'src/EmailList/Sent/sent.html',
				//controller: 'SentController'
			}).state('view', {
				url: '/view/:emailId',
				templateUrl: 'single_mail/views/single.html',
				//controller: 'SingleController'
			}).state('create', {
				url: '/create',
				templateUrl: 'src/NewMail/newMail.html',
				//controller: 'NewMailController'
			}).state('config', {
				url: '/config',
				templateUrl: 'src/Configuration/config.html',
				//controller: 'ConfigController'
			});
		});
		
	
})();