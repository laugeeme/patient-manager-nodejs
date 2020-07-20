'use strict';

const express = require('express');
const router = express.Router();
const patientControllers = require('../controllers/patientControllers');

module.exports = function () {
  //add new patients via POST

  router.post('/patients', patientControllers.newClient);
  return router;
};
