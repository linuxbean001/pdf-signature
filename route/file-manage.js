const express = require('express');
const router = express.Router();
const addFile = require('../model/file-manage');
var role = require('../helper/role');



//**********************(Adding New files)*************************** */
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })
router.post('/file-upload', upload.single('files'), (req, res, next) => {
    let newAddFile = new addFile({
        role: role.Admin,
        files: req.file.path
    });
    console.log('ZZZZZZZZZZZ', req.file, newAddFile);
    newAddFile.save((err, addFile) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('file uploaded')
            res.status(201).json({
                addFile
            })
        }
    }
    )
});
//*******************(view file[Get files])******************** */
router.get('/view-file', (req, res, next) => {
    addFile.findById(req.body._id)
        .then(data => {
            if (!data) {
                res.status(404).json({
                    msg: "No user found with this id " + req.body._id


                })
            }
            res.status(201).json({
                data
            });
        });

});

//************************(Delete files)************************ */
router.delete('/delete-file', (req, res, next) => {
    addFile.findByIdAndRemove(req.body._id)
        .then(data => {
            if (!data) {
                res.status(404).json({
                    msg: "No File found with this id " + req.body._id
                })
            }
            res.status(201).json({
                message: "File Deleted sucessfully"
            });
        });

})

module.exports = router;