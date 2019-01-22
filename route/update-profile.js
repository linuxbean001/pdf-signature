const express = require('express');
const router = express.Router();
const user = require('../model/admin');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');


router.get('/profile', (req, res, next) => {
    user.findOne(function (err, profile) {
        if (err) {
            res.status(404).json({
                err
            });
        }
        else {
            res.json({
                profile
            });


        }
    });
});
//**************(Updation code)********** */
router.put('/update-profile', (req, res, next) => {
    let updateUser = new user({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        alternativeEmail: req.body.alternativeEmail,
        phone: req.body.phone,
        alternativePhone: req.body.alternativePhone,
        company: req.body.company,
        Address: [{
            'street': req.body.street,
            'city': req.body.city,
            'state': req.body.state,
            'zip': req.body.zip
        }]
    })
    console.log('ZZZZZZZZZZZZZZZZZZ')
    user.findByIdAndUpdate(req.body._id, {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        alternativeEmail: req.body.alternativeEmail,
        phone: req.body.phone,
        alternativePhone: req.body.alternativePhone,
        company: req.body.company,
        Address: [{
            'street': req.body.street,
            'city': req.body.city,
            'state': req.body.state,
            'zip': req.body.zip
        }]
    }, { new: true })
        .then(data => {
            res.status(201).json({
                msg: "Data has been updated succesfully"
            })
        }).catch(err => {
            console.log(err);
        });
});
module.exports = router;