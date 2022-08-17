const express = require('express');
const app = express();
const db = require('./db');
const multer = require('multer')
const path = require('path')
const session = require('express-session');
const bodyParser = require('body-parser');


const cors = require('cors');  
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.static("./public"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: "try hack me",
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}))



// Endpoints
const authentication = require('./Endpoints/Auth')
const user = require('./Endpoints/User')
const room = require('./Endpoints/Rooms')

// AUTHENTICATION APIs 
app.post('/register', authentication.registerUser)
app.post('/login', authentication.loginUser)
app.get('/auth/hasloggedin', authentication.checkLoginAuthentication)
app.get('/auth/signout', authentication.logOutUser)




// USER APIs
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './public/images/users/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
 
var upload = multer({
    storage: storage
});

app.put("/profile/image", upload.single('file'), user.updateProfileImage);


// Room APIs
var roomStorage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './public/images/rooms/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var roomImageUpload = multer({
    storage: roomStorage
})
app.post('/room', roomImageUpload.single('file'), room.createRoom)

// Running the App
app.listen(process.env.PORT || 3001, () => {
    console.log('Yeey, your server is running on port 3001')
});