module.exports = function(module) {
	module.run(["$templateCache", function($templateCache) {
		$templateCache.put('auth.html', 
		'<div ng-switch="type" class="container" ng-controller="LoginController">' +
			'<section ng-switch-when="reg" class="auth-block">' +
				'<form method="POST" action="/reg">' +
					'<article class="col-sm-12 auth-block__input">' +
						'<input name="name" type="text" placeholder="Name">' +
						'<p class="auth-block__valid"></p>' +
					'</article>' +
					'<article class="col-sm-12 auth-block__input">' +
						'<input name="login" type="text" placeholder="Login">' +
						'<p class="auth-block__valid"></p>' +
					'</article>' +
					'<article class="col-sm-12 auth-block__input">' +
						'<input name="pass" type="text" placeholder="Password">' +
						'<p class="auth-block__valid"></p>' +
					'</article>' +
					'<article class="col-sm-12 auth-block__input">' +
						'<input name="email" type="text" placeholder="Email">' +
						'<p class="auth-block__valid"></p>' +
					'</article>' +
					'<article class="col-sm-12 auth-block__input">' +
						'<select name="prof">' +
							'<option selected value="Разработчик">Разработчик</option>' +
							'<option value="Дизайнер">Дизайнер</option>' +
							'<option value="Менеджер">Менеджер</option>' +
						'</select>' +
						'<p class="auth-block__valid"></p>' +
					'</article>' +
					'<button class="btn btn-success">Зарегистрироваться</button>' +
				'</form>' +
				'<a class="auth-block__change" ng-click="reg()">Войти</a>' +
			'</section>' +
			'<section ng-switch-when="auth" class="auth-block">' +
				'<form method="POST" action="/log">' +
				'<article class="col-sm-12 auth-block__input">' +
					'<input name="login" type="text" placeholder="Login">' +
					'<p class="auth-block__valid"></p>' +
				'</article>' +
				'<article class="col-sm-12 auth-block__input">' +
					'<input name="pass" type="text" placeholder="Password">' +
					'<p class="auth-block__valid"></p>' +
				'</article>' +
				'<button class="btn btn-success auth-block__submit">Войти</button>' +
				'</form>' +
				'<a class="auth-block__change" ng-click="reg()">Зарегистрироваться</a>' +
			'</section>' +
		'</div>')
	}])
}
	
	


