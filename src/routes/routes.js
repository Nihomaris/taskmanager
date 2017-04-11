import User from '../models/user';
import Task from '../models/task';
import bodyParser from 'body-parser';

const Router = function(app) {

	app.use( bodyParser.json() );       // to support JSON-encoded bodies
	app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	  extended: true
	})); 

	app.get('/', (req, res) => {
		res.sendFile(__dirname + 'public/index.html');
	});

	app.get('/task-list', (req, res) => {
		Task.find((err, data) => {
			if(err) throw err;
			return data;
		})
		.then((data) => {res.json(data);})
		.catch((err) => {res.send('Ошибка запроса к БД')})
	});

	app.post('/reg', (req, res) => {

		var user = new User({
			name: req.body.name,
			login: req.body.login,
			password: req.body.pass,
			email: req.body.email,
			specialist: req.body.proff
		});

		user.save().then(res.send('Регистрация успешна'))
		.catch((err) => { if(err) throw err; })
	});

	app.post('/log', (req, res) => {
		User.find({'login': req.body.login, 'password': req.body.pass}, 
		(err, data) => {
			if(err) throw err;
			return data;
		})
		.then((data) => {res.json(data);})
		.catch((err) => {res.send('Ошибка запроса к БД')})

	});

	app.post('/create', (req, res) => {
		var task = new Task({
			title: req.body.title,
			description: req.body.descr,
			attached: req.body.attached,
			status: 'open',
			watchers: req.body.attached,
			commentsId: ''
		})

		task.save()
		.then(res.send('Задача создана'))
		.catch((err) => {if(err) throw err;})
	})

}


module.exports = Router;
