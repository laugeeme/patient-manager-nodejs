'use strict';

const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientControllers');

module.exports = function () {
  //add new patients via POST
  router.post('/patients', patientController.newClient);

  //get all registers from database
  router.get('/patients',
    patientController.getPatients
  );


  return router;
};
