var angular = require('angular');
require('angular-module-route');
require('./auth/auth');
require('./task-body/task-body');
require('./main-templates');


var app = angular.module('app', ['authModule', 'taskModule','mainTamplates','ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	// $locationProvider.html5Mode({
	// 	enabled: true,
	// 	requireBase: false
	// });

	$routeProvider
	.when('/login', {
		templateUrl: 'login.html'
	})
	.when('/main', {
		templateUrl: 'main-table.html'
	})
	.when('/task', {
		templateUrl: 'task-body.html'
	})
	.otherwise({
		redirectTo: '/login'
	});
}]);

app.controller('MainController', ['$scope', function($scope) {
	$scope.menu = false;

	$scope.toggleMenu = function() {
		$scope.menu = !$scope.menu;
	}
}])
app.controller('ContainerController', ['$scope', '$http', function($scope, $http) {
	$scope.opentasks = [];
	$scope.processtasks = [];
	$scope.closetasks = [];
	$scope.feedbacktask = [];

	$http.get('/task-list').then(function(data) {
		var tasklist = data.data;

		tasklist.forEach(function(item, i) {
			switch(item.status) {
				case 'open':
					$scope.opentasks.push(item);
				break;
				case 'proccess':
					$scope.processtasks.push(item);
				break;
				case 'closed':
					$scope.closetasks.push(item);
				break;
				case 'feedback':
					$scope.feedbacktask.push(item);
				break;
			}
		})
	})
}])
