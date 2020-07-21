import React, { Fragment } from 'react';

const Patients = ({ appointments }) => {
  if (appointments.length === 0) return null;

  console.log(appointments);

  return (
    <Fragment>
      <h1 className="my-5">Patient Manager</h1>
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 d-flex justify-content-center">
            <a
              href="#"
              className="btn btn-success text-uppercase py-2 px-5 font-weight-bold"
            >
              New appointment
            </a>
          </div>

          <div className="col-md-8 mx-auto">
            <div className="list-group">
              {appointments.map((appointment) => (
                <a key={appointment._id}>
                  <h3 key={appointment._id} className="mb-3">
                    {appointment.name}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Patients;
