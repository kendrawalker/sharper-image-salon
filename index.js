const express = require('express');
const app = express();
var emailpass = require('./email_password');
var spicedPg = require('spiced-pg');
var db = spicedPg(process.env.DATABASE_URL || 'postgres:kendr:soybean88@localhost:5432/sharper_image_salon');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var passwordAuth = require('./src/passwordauth');
var multer = require('multer');
var csurf = require('csurf');
const server = require('http').Server(app);
const io = require('socket.io')(server);
var nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: emailpass.user,
        pass: emailpass.pass
    }
});

if (process.env.NODE_ENV != 'production') {
    app.use(require('./build'));
}

var diskStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + '/public/uploads');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + '_' + Math.floor(Math.random() * 99999999) + '_' + file.originalname);
    }
});

var uploader = multer({
    storage: diskStorage,
    limits: {
        filesize: 2097152
    }
});

app.use(cookieSession({
    secret: 'working is for old people',
    maxAge: 1000 * 60 * 60 * 24 * 14
}));

app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.use("/uploads", express.static(__dirname + '/public/uploads'));
app.use("/images", express.static(__dirname + '/public/images'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});
app.use(csurf());
app.use(function(req, res, next) {
    res.cookie('ChocChip', req.csrfToken());
    next();
});

io.on('connect', function(socket) {
    socket.on('disconnect', function() {
    });
});

app.get('/', function(req, res){
    if(req.session.user) {
        res.sendFile(__dirname + '/index.html');
    } else {
        res.redirect('/welcome');
    }
});

app.get('/welcome', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


app.post('/newcustomeremail', function(req, res) {
    console.log(req.body.firstName, req.body.lastName);
    var text = `${req.body.firstName} ${req.body.lastName} has sent a new client request to Sharper Image Salon.
    He/she is a ${req.body.gender}. Contact him/her at ${req.body.phoneNumber} or at his/her email address ${req.body.email}.
    He/she has left the following note: ${req.body.note}`;
    var mailOptions = {
        from: 'sharper.image.salon.batesville@gmail.com',
        to: 'kendra.danielle.walker@gmail.com; Apriljordan2201@gmail.com; debrakwalker@gmail.com; sharper.image.salon.batesville@gmail.com',
        subject: `Sharper Image Salon New Client Request for ${req.body.firstName} ${req.body.lastName}`,
        text: text
    };
    transporter.sendMail(mailOptions, function(err, info){
        if(err) {
            console.log(err);
            res.json({error: 'true'});
        } else {
            console.log('Message sent: ' + info.response);
            res.json({
                yo: info.response,
                success: true
            });
        }
    });
});


server.listen(process.env.PORT || 8080, function() {
    console.log("I'm listening.");
});
