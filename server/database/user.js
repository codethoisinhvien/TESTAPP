let mongoose = require('mongoose');
    bcrypt = require('bcrypt');
let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email:String,
    usename:String,
    password:String,
    active: Boolean,
    timecreate:Date.now
  })
  module.exports = mongoose.model('User', userSchema)