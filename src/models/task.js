import { mongoose, Schema, ObjectId } from '../db/mongoose';

var Task = new Schema({
	title: String,
	description: String,
	attached: String,
	status: String,
	watchers: String,
	commentsId: String
})

module.exports = mongoose.model('Task', Task);