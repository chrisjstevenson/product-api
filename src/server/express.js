const config = require('./config/config');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors({ optionsSuccessStatus: 200 }));

app.use('/scripts', express.static(__dirname + '/node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// setup routes
require('./routes').http(app);

module.exports = app;
