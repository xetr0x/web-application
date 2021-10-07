'use strict'

const express = require('express');
const router = require('./routes');
const app = express();
const port = 8042;
const indexRouter = require('./routes/index');



app.use(express.static('public'));


app.use('/', indexRouter);


app.listen(port);

console.log('its all right fam, the server is running smoothly' + port);