'use strict';
const express = require('express');
const mongoose = require('mongoose');


//create server with Express
const app = express();

//connect to Mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinary', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

//port and run server
app.listen(4000, () => {
  console.log('El servidor está funcionando');
});
