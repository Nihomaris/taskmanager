module.exports = function(module) {
	module.directive('taskcreate', function($templateCache) {
		return {
			template: $templateCache.get('taskCreateTemplate.html'),
			link: function(scope, element, attrs) {
				console.log("task-create");
			}
		}
	})
}