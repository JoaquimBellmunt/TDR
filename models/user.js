const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
var autoIncrement = require('mongoose-auto-increment');


const User = new mongoose.Schema({
 username: String,
 password: String,
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);