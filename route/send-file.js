var express = require('express');
var router = express.Router();
var sendFile = require('../model/sendFile');
var role = require('../helper/role');
var file = require('../model/file-manage');

router.post('/send-file', (req, res, next) => {
    file.findById(req.body._id)
        .then(fileData => {
            if (fileData) {

                let addMsg = new sendFile({
                    role: role.Admin,
                    subject: req.body.subject,
                    message: req.body.message,


                });
                console.log(addMsg + " data with msg and subject" + fileData)


                addMsg.save((err, addMsg) => {
                    if (err) {
                        res.status(404).json({
                            message: 'something worng in back end ' + err
                        })
                    }
                    else {
                        console.log('XXXXXX', addMsg, fileData);

                        res.status(201).json({
                            addMsg, fileData
                        })
                    }
                })
            }
            else {
                res.status(404).json({
                    err
                })
            }
        })
})
module.exports = router;