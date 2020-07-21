'use strict';
const mongoose = require('mongoose');
//creates structure in the database
const Schema = mongoose.Schema;

//create new table
const patientsSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  owner: {
    type: String,
    trim: true,
  },
  date: {
    type: String,
    trim: true,
  },
  telephone: {
    type: String,
    trim: true,
  },
  hour: {
    type: String,
    trim: true,
  },
  symptomns: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('Patient', patientsSchema);
