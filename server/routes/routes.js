'use strict';

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

var _task = require('../models/task');

var _task2 = _interopRequireDefault(_task);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = function Router(app) {

	app.use(_bodyParser2.default.json()); // to support JSON-encoded bodies
	app.use(_bodyParser2.default.urlencoded({ // to support URL-encoded bodies
		extended: true
	}));

	app.get('/', function (req, res) {
		res.sendFile(__dirname + 'public/index.html');
	});

	app.get('/task-list', function (req, res) {
		_task2.default.find(function (err, data) {
			if (err) throw err;
			return data;
		}).then(function (data) {
			res.json(data);
		}).catch(function (err) {
			res.send('Ошибка запроса к БД');
		});
	});

	app.post('/reg', function (req, res) {

		var user = new _user2.default({
			name: req.body.name,
			login: req.body.login,
			password: req.body.pass,
			email: req.body.email,
			specialist: req.body.proff
		});

		user.save().then(res.send('Регистрация успешна')).catch(function (err) {
			if (err) throw err;
		});
	});

	app.post('/log', function (req, res) {
		_user2.default.find({ 'login': req.body.login, 'password': req.body.pass }, function (err, data) {
			if (err) throw err;
			return data;
		}).then(function (data) {
			res.json(data);
		}).catch(function (err) {
			res.send('Ошибка запроса к БД');
		});
	});

	app.post('/create', function (req, res) {
		var task = new _task2.default({
			title: req.body.title,
			description: req.body.descr,
			attached: req.body.attached,
			status: 'open',
			watchers: req.body.attached,
			commentsId: ''
		});

		task.save().then(res.send('Задача создана')).catch(function (err) {
			if (err) throw err;
		});
	});
};

module.exports = Router;
//# sourceMappingURL=routes.js.map