module.exports = function(module) {
	module.directive('task', function($templateCache) {
		return {
			template: $templateCache.get('taskTemplate.html'),
			link: function(scope, element, attrs) {
				console.log("task")
			}
		}
	})
}