const config = require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// setup routes
require('./routes').http(app);

module.exports = app;
