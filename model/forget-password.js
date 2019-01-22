const Register = require('./admin');
const mongoose = require('mongoose');

var Schema = mongoose.Schema
var forgetPassword = new Schema({
    usrId: { type: Schema.Types.ObjectId, ref: 'Register' },
    password: String,
    // url=mongoose.Types.ObjectId.isValid(Register),
    // password:String,
    email: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('password', forgetPassword);