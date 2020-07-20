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
