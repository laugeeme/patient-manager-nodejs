import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

const Appointment = (props) => {
  if (!props.appointment) {
    props.history.push('/');
    return null;
  }

  const {
    appointment: { name, owner, date, hour, telephone, symptoms },
  } = props;

  return (
    <Fragment>
      <h1 className="my-5">Name of the appointment: {name}</h1>
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

          <div className="col-md-8 mx-auto">
            <div className="list-group">
              <div className="p-5 list-group-item list-group-item-action flex-column align-items-center">
                <div className="d-flex w-100 justify-content-between mb-4">
                  <h3 className="mb-3">{name}</h3>
                  <small className="fecha-alta">
                    {date} - {hour}
                  </small>
                </div>
                <p className="mb-0">{symptoms}</p>
                <div className="contacto py-3">
                  <p>Owner: {owner}</p>
                  <p>Telephone: {telephone}</p>
                </div>

                <div className="">
                  <button type="button" className="text-uppercase py-2 px-5 font-weight-bold btn btn-danger col">Delete &times;</button>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(Appointment);
