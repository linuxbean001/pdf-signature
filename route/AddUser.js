const express = require('express');
const router = express.Router();
const AddUser = require('../model/admin');
var jwt = require('jsonwebtoken');
var Role = require('../helper/role');
const nodemailer = require('nodemailer');




//************Register User(Add User)***************** */
router.post('/addUser', (req, res, next) => {
    console.log('xxxxxxxxxx xxxxxxxxxxxx init mthod')
    AddUser.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    msg: 'email alredy exist'
                });

            }
            else {
                let newAddUser = new AddUser({
                    role: Role.Admin,
                    name: req.body.name,
                    password: req.body.password,
                    email: req.body.email,
                    alternativeEmail: req.body.alternativeEmail,
                    phone: req.body.phone,
                    alternativePhone: req.body.alternativePhone,
                    company: req.body.company,
                    Address:{
                    
                        street: req.body.Address.street,
                           city: req.body.Address.city,
                           state: req.body.Address.state,
                           zip: req.body.Address.zip
                      }
                });
                console.log('Registerd user : ', newAddUser, " Address", newAddUser.Address, "email  ", newAddUser.email);



                //****************send mail********************* */
                var transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                        user: 'patilshivam.linuxbean@gmail.com',
                        pass: 'shivam1995'
                    }

                });
                var mailOption = {
                    from: 'patilshivam.linuxbean@gmail.com',
                    to: newAddUser.email,
                    subject: 'your login id And Password',
                    text: 'LogIn Id is:' + newAddUser.email + ' password:' + newAddUser.password
                };
                transporter.sendMail(mailOption, function (err, info) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log('ID and password sent' + info.response);
                    }
                })
                //***************************END Email Sending Code***************************************** */

                newAddUser.save((err, AddUser) => {

                    if (err) {
                        res.json(err);
                        console.log(err);
                    }
                    else {


                        res.json(AddUser);
                        console.log("data stored succesfully", AddUser);
                    }
                });
            }
        });
});


//******************LogIn User***************************** */

router.post('/login', (req, res, next) => {
    AddUser.findOne({ email: req.body.email, password: req.body.password })
        .then(data => {
            if (data) {
                const token = jwt.sign({
                    email: data.email,
                    _id: data._id
                },
                    '@' + data._id + '-' + data.email + data.password,
                    {
                        expiresIn: "1h"
                    });
                res.status(201).json({
                    message: "Logged In",
                    body: data,
                    token: token
                });
            }
            else {
                res.status(401).json({
                    message: "unauthorised"
                });
            }
        }).catch(err => {
            res.status(400).json({
                msg: err,
            });
        });

})
module.exports = router;