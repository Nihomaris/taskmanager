import { mongoose, Schema, ObjectId } from '../db/mongoose';

var User = new Schema({
	name: String,
	login: String,
	password: String,
	email: String,
	specialist: String
})

module.exports = mongoose.model('User', User);