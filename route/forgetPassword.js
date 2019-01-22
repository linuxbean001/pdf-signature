const express = require('express');
const password = require('../model/forget-password');
const router = express.Router();
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const AddUser = require('../model/admin');
const bcrypt = require('bcrypt-nodejs');


router.post('/forget-password', (req, res, next) => {
    AddUser.findOne({ email: req.body.email })
        .then(data => {
            if (data) {
                const token = jwt.sign({
                    email: data.email,
                    _id: data._id,

                },
                    '@' + data._id + '-' + data.email,
                    {
                        expiresIn: "1h"
                    });
                res.status(200).json({
                    message: "Loged In",
                    body: data,
                    token: token
                });
                console.log("XXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXX")


                AddUser.updateOne({ email: data.email }, { $set: { password: req.body.password } }, (err, doc) => {
                    if (err) {
                        console.log(err + "ZZZZZZZ")
                    }
                    else {

                        console.log(doc);
                        var transporter = nodemailer.createTransport({
                            service: 'Gmail',
                            auth: {
                                user: 'patilshivam.linuxbean@gmail.com',
                                pass: 'shivam1995'
                            }

                        });
                        console.log();
                        var mailOption = {
                            from: 'patilshivam.linuxbean@gmail.com',
                            to: data.email,
                            subject: 'your login id And Password',
                            text: '',
                            html: " <h3>Your Password has been updated</h3>"
                        };

                        transporter.sendMail(mailOption, function (err, info) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                console.log('ID and password sent' + info.response);
                            }
                        })
                        console.log("YYYYYYYYYYYYYYYYYY" + data.email)
                    }
                });





            } else {
                res.status(401).json({
                    message: "Unauthorised",
                });
                console.log('Unauthorised')
            }
        }).catch(err => {
            res.status(400).json({
                message: err,
            });
        });


})
module.exports = router;
