'use strict';
const Patient = require('../models/Patient');

//when a new client is created
exports.newClient = async (req, res, next) => {
  //create patient object with data from req.body
  const patient = new Patient(req.body);

  try {
    await patient.save();
    res.json({ message: 'El cliente se agregó correctamente' });
  } catch (error) {
    console.log(error);
    next(); //to go to the next function if there is an error
  }
};

/**Get all patients */
exports.getPatients = async (req, res, next) => {
  try {
    const patients = await Patient.find({});
    res.json(patients);
  } catch (error) {
    console.log(error);
    next();
  }
};

/**Get patient by ID */

exports.getPatient = async (req, res, next) => {
  try {
    const patient = await Patient.findById(req.params.id);
    res.json(patient);
  } catch (error) {
    console.log(error);
    next();
  }
};

/**Update patient by ID */
exports.updatePatient = async (req, res, next) => {
  try {
    const patient = await Patient.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.json(patient);
  } catch (error) {
    console.log(error);
    next();
  }
};
