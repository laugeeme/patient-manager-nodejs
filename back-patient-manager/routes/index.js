'use strict';

const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientControllers');

module.exports = function () {
  //add new patients via POST
  router.post('/patients', patientController.newClient);

  //get all registers from database
  router.get('/patients', patientController.getPatients);

  //get patient by ID
  router.get('/patients/:id', patientController.getPatient);

  //update register with ID
  router.put('/patients/:id', patientController.updatePatient);

  //delete register by ID
  router.delete('/patients/:id', patientController.deletePatient);

  return router;
};
