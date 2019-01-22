// const http=require('http');
const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
var cors = require('cors');



mongoose.connect('mongodb+srv://admin_07:qwerty_123@onlinesign-e57dn.mongodb.net/AddUser?retryWrites=true', { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
    console.log('connected to data base succesfully');
});


mongoose.connection.on('error', (err) => {
    console.log(err);
});



app.use(bodyparser.json());
app.use(cors());
app.use(express.static('uploads'));
//*************Intializing Routes (AddUser)***************************** */
const route = require('./route/AddUser.js');
app.use('/api', route);

//*****************(Forget Password)*************** */
const password = require('./route/forgetPassword.js');
app.use('/api', password);

//************* (Update profile)***************************** */
const update = require('./route/update-profile.js');
app.use('/api', update);

//*******************(Delete User)*********************** */
const deleteUser = require('./route/delete-user.js');
app.use('/api', deleteUser);

//****************(File Upload)********************* */
const addFile = require('./route/file-manage.js');
app.use('/api', addFile);

//****************(Send File)******************** */
const sendFile = require('./route/send-file.js');
app.use('/api', sendFile);



const port = 3000;
app.get('/', (req, res) => {
    res.send('get perform succesfully')
})
// const server=http.createServer('app');
app.listen(port, () => {
    console.log('sucessfully connected to port: ' + port);
});
