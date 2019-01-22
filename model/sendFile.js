var mongoose = require('mongoose');

const sendFileSchema = mongoose.Schema({
    subject: {
        type: String
    },
    message: {
        type: String
    }
});
module.exports = mongoose.model('sendFile', sendFileSchema)