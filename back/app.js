const express = require('express');
const cors = require('cors');
// const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const updateDB = require('./utils/updateDB');

const mongoDB = 'mongodb://mongo:27017/instastore';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
 .then(() => {
     console.log("Connected to database");
     updateDB();
    })
 .catch((err) => console.log(err));

const stores = require('./routes/stores');
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/closest', stores);

module.exports = app;