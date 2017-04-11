'use strict';

var _mongoose = require('../db/mongoose');

var Task = new _mongoose.Schema({
	title: String,
	description: String,
	attached: String,
	status: String,
	watchers: String,
	commentsId: String
});

module.exports = _mongoose.mongoose.model('Task', Task);
//# sourceMappingURL=task.js.map