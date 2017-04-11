'use strict';

var _mongoose = require('../db/mongoose');

var User = new _mongoose.Schema({
	name: String,
	login: String,
	password: String,
	email: String,
	specialist: String
});

module.exports = _mongoose.mongoose.model('User', User);
//# sourceMappingURL=user.js.map