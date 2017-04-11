module.exports = function(module) {
	module.directive('taskbody', function($templateCache) {
		return {
			template: $templateCache.get('taskBodyTemplate.html'),
			link: function(scope, element, attrs) {
				console.log("task-body")
			}
		}
	})
}