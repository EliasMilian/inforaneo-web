const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const database = require('./config/database.config');

const apiRouter = require('./routes/index_router');

const app = express();
database.connect();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Api router 

app.use('/api', apiRouter);

module.exports = app;
