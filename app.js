var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = require('./config/config').mongodbUrl;
console.log(db, 'db')
mongoose.connect(db, { useNewUrlParser: true }).then(() => console.log('Connected')).catch(err => console.log(err))

var indexRouter = require('./routes/books');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/books', indexRouter);

module.exports = app;