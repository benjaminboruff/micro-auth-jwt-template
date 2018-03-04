// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({ username: String, password: String, token: String });

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', userSchema);
