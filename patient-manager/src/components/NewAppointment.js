import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NewAppointment = () => {
  return (
    <Fragment>
      <h1 className="my-5">New Appointment</h1>
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link
              to={'/'}
              className="btn btn-success text-uppercase py-2 px-5 font-weight-bold"
            >
              Back{' '}
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NewAppointment;
