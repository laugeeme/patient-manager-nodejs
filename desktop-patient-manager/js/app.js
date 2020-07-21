'use strict';

fetch('http://localhost:4000/patient')
  .then((response) => response.json())
  .then((data) => showAppointments(data));

function showAppointments(appointments) {
  const appointmentsContainer = document.querySelector('#citas');

  let appointmentsHTML = '';

  appointments.forEach((appointment) => {
    appointmentsHTML += `<div class="p-5 list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between mb-4">
          <h3 class="mb-3">${appointment.name}</h3>
          <small class="fecha-alta">
          ${appointment.date} - ${appointment.hour}
          </small>
        </div>
        <p class="mb-0">${appointment.symptomns}</p>
        <div class="contacto py-3">
          <p>Owner: ${appointment.owner}</p>
          <p>Telephone: ${appointment.telephone}</p>
        </div>
      </div>`;
  });

  //Insert HTML
  appointmentsContainer.innerHTML = appointmentsHTML;
}
