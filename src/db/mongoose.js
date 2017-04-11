import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Nih:Spider1111@ds060369.mlab.com:60369/nihcrm');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

module.exports = {'mongoose': mongoose, 'Schema': Schema, 'ObjectId': ObjectId};