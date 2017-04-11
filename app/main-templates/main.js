module.exports = function(module) {
	module.run(["$templateCache", function($templateCache) {
		$templateCache.put('login.html', '<auth></auth>'),
		$templateCache.put('task-body.html', '<taskbody></taskbody>'),
		$templateCache.put('main-table.html',
			'<div class="task-container" ng-controller="ContainerController">' +
			'<taskcreate></taskcreate>' +
			'<div class="container">' +
			'<div class="row">' +
				'<div class="col-xs-3 panel panel-default">' +
				  '<div class="panel-heading">Открыто</div>' +
				  '<div class="panel-body">' +
				    '<div class="list-group">' +
				    '<task ng-repeat="item in opentasks"></task>' +
				    '</div>' +
				  '</div>' +
				'</div>' +
				'<div class="col-xs-3 panel panel-info">' +
				  '<div class="panel-heading">В работе</div>' +
				  '<div class="panel-body">' +
				  '<div class="list-group">' +
				  '<task ng-repeat="item in processtasks"></task>' +
				  '</div>' +
				  '</div>' +
				'</div>' +
				'<div class="col-xs-3 panel panel-warning">' +
				  '<div class="panel-heading">Закрыто</div>' +
				  '<div class="panel-body">' +
				  '<div class="list-group">' +
				  '<task ng-repeat="item in closetasks"></task>' +
				  '</div>' +
				  '</div>' +
				'</div>' +
				'<div class="col-xs-3 panel panel-danger">' +
				  '<div class="panel-heading">Обратная связь</div>' +
				  '<div class="panel-body">' +
				  '<div class="list-group">' +
				  '<task ng-repeat="item in feedbacktasks"></task>' +
				  '</div>' +
				  '</div>' +
				'</div>' +
			'</div>' +
			'</div>' +
			'</div>'
		)
	}])
}