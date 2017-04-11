module.exports = function(module) {
	module.directive('auth', function($templateCache) {
		return {
			template: $templateCache.get('auth.html'),
			link: function(scope, element, attrs) {
				console.log("auth")
			}
		}
	});
}