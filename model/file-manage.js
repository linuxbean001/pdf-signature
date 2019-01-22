var mongoose = require('mongoose');

var addFileSchema = mongoose.Schema({

    files: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('addFile', addFileSchema);