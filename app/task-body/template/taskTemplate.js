module.exports = function(module) {
	module.run(['$templateCache', function($templateCache) {
		$templateCache.put('taskTemplate.html', 
			'<a href="/#!/task" class="list-group-item" ng-controller="TaskController">' +
			  '<h4 class="list-group-item-heading" ng-bind="item.title"></h4>' +
			      '<div class="alert alert-success" role="alert">1 новый комментарий</div>' +
			'</a>'
		),
		$templateCache.put('taskBodyTemplate.html', 
			'<section class="body-wrap" ng-controller="TaskBodyController">' +
					'<div class="container-fluid">' +
						'<div class="col-xs-9">' +
						'<section class="jumbotron task-page-block">' +
							'<h1 class="task-page-block__name" ng-bind="name"></h1>' +
							'<p class="task-page-block__description" ng-bind="description"></p>' +
						'</section>' +
						'</div>' +
						'<div class="col-xs-3">' +
						'<aside class="task-page-aside">' +
							'<div class="well well-sm">ID: 193237</div>' +
							'<div class="well well-sm">Статус задачи: Открыто</div>' +
							'<div class="well well-sm">Дата создания: 05.04.2017</div>' +
							'<div class="well well-sm">Назначена на: Александр Щепин</div>' +
						'</aside>' +
						'</div>' +
					'</div>' +
			'</section>'
		),
		$templateCache.put('taskCreateTemplate.html', 
		'<div ng-controller="TaskCreateController">' +
			'<div class="modal fade in" id="myModal" style="display: block; background-color: rgba(0,0,0,0.5);" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" ng-show="show">' +
			  '<div class="modal-dialog" role="document">' +
			    '<div class="modal-content">' +
			    '<form method="POST" action="/create">' +
			      '<div class="modal-header">' +
			        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ng-click="showModal()">&times;</span></button>' +
			        '<h4 class="modal-title" id="myModalLabel">Создание новой задачи</h4>' +
			      '</div>' +
			      '<div class="modal-body">' +
			        '<div class="input-group input-group-lg">' +
			          '<span class="input-group-addon" id="sizing-addon1">Название задачи:</span>' +
			          '<input name="title" type="text" class="form-control" placeholder="" aria-describedby="sizing-addon1">' +
			        '</div>' +
			        '<div class="form-group">' +
			          '<label for="comment"></label>' +
			          '<textarea name="descr" class="form-control" rows="5" id="comment" placeholder="Описание задачи"></textarea>' +
			        '</div>' +
			        '<div class="form-group">' +
			          '<label for="sel1">Назначить задачу:</label>' +
			          '<select name="attached" class="form-control" id="sel1">' +
			            '<option>Иван Иваныч</option>' +
			            '<option>Петр Петрович</option>' +
			            '<option>Саня Саныч</option>' +
			            '<option>Василий Василич</option>' +
			          '</select>' +
			        '</div>' +
			      '</div>' +
			      '<div class="modal-footer">' +
			        '<button type="button" class="btn btn-default" data-dismiss="modal" ng-click="showModal()">Отмена</button>' +
			        '<button class="btn btn-primary">Создать</button>' +
			      '</div>' +
			    '</form>' +
			    '</div>' +
			  '</div>' +
			'</div>' +
			'<button type="button" class="btn btn-danger" ng-click="showModal()">Создать новую задачу</button>' +
		'</div>'
		)
	}])
}