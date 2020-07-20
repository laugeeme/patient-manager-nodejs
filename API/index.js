'use strict';

//create server with Express
const express = require('express');
const app = express();

//port and run server
app.listen(4000, () => {
  console.log('El servidor está funcionando');
});
