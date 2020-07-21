'use strict';

fetch('http://localhost4000/patient')
  .then((response) => response.json)
  .then((data) => showAppointments(data));

function showAppointments(appointments) {
  console.log(appointments);
}
 