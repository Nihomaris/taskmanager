module.exports = function(module) {
	module.controller('LoginController', ['$scope', function($scope) {
		$scope.type = 'auth';

		$scope.reg = function() {

			if($scope.type == 'auth') {
				$scope.type = 'reg';
			} else {
				$scope.type = 'auth';
			}
			
		}
	}])

	// module.controller('TextAreaWithLimitCtrl', ['$scope', function($scope) {
	// 	var MAX_LEN = 100;
	// 	var WARN_THRASHOLD = 20;
	// 	$scope.message = "";
	// 	$scope.remaining = function() {
	// 		return MAX_LEN - $scope.message.length;
	// 	}
	// 	$scope.shouldWarn = function() {
	// 		return $scope.remaining() < WARN_THRASHOLD;
	// 	}
	// 	$scope.hasValidLength = function() {
	// 		return $scope.message.length < MAX_LEN;
	// 	}
	// 	$scope.clear = function() {
	// 		$scope.message = "";
	// 	}
	// }])
}