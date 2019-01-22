const express = require('express');
const router = express.Router();
const user = require('../model/admin');


router.delete('/delete-user', (req, res, next) => {
    console.log("XXXXXXX" + req.body._id);
    user.findByIdAndRemove(req.body._id)
        .then(data => {
            if (!data) {
                res.status(404).json({
                    msg: "No user found with this id " + req.body._id
                })
            }
            res.status(201).json({
                message: "User Deleted sucessfully"
            });
        });

})
module.exports = router;