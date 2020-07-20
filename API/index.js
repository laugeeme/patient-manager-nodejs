'use strict';
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');

//create server with Express
const app = express();

//connect to Mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinary', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

//enable body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//enable routing
app.use('/', routes());

//port and run server
app.listen(4000, () => {
  console.log('El servidor está funcionando');
});
