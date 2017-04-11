'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect('mongodb://Nih:Spider1111@ds060369.mlab.com:60369/nihcrm');

var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.ObjectId;

var AddUser = new Schema({
	author: String
});

module.exports = _mongoose2.default.model('Add', AddUser);
//# sourceMappingURL=db.js.map