var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var filmRouter = require('./routes/films');
const authsRouter = require('./routes/auths');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/films', filmRouter);
app.use('/auths', authsRouter);

module.exports = app;
