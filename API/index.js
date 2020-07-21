'use strict';
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

//create server with Express
const app = express();

//enable cors
const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    const exist = whitelist.some((domain) => domain === origin);
    if (exist) {
      callback(null, true);
    } else {
      callback(new Error('No permitted by CORS'));
    }
  },
};

/* app.use(cors(corsOptions)); */
app.use(cors());

//connect to Mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinary', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

//enable body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//enable routing
app.use('/', routes());

//port and run server
app.listen(4000, () => {
  console.log('El servidor está funcionando');
});
