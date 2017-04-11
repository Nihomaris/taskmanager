module.exports = function(module) {
	module.controller('TaskBodyController', ['$scope', function($scope) {
		$scope.name = 'Придумать дизайн корпуса';
		$scope.description = "Необходимо придумать дизайн корпуса, учитывая возможность циркуляции воздуха и размеры устройствю."
	}]);	
	module.controller('TaskController', ['$scope', function($scope) {
		$scope.name = 'Придумать дизайн корпуса';
		$scope.description = "Необходимо придумать дизайн корпуса, учитывая возможность циркуляции воздуха и размеры устройствю."
	}]);
	module.controller('TaskCreateController', ['$scope', function($scope) {
		$scope.show = false;

		$scope.showModal = function() {
			$scope.show = !$scope.show;
		}
	}]);
}