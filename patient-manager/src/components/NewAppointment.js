import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import clientAxios from '../config/axios';

const NewAppointment = (props) => {
  //generate state as object
  const [appointment, saveAppointment] = useState({
    name: '',
    owner: '',
    date: '',
    hour: '',
    telephone: '',
    symptoms: '',
  });

  //read form data
  const updateState = (e) => {
    saveAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };


  //send petition to API
  const createNewAppointment = e => {
      e.preventDefault();

      //sent with AXIOS
      clientAxios.post('patients', appointment)
      .then(response =>{
          console.log(response);

          props.saveConsult(true);

          //redirect
          props.history.push('/');
      })
  }

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
          <div className="col-md-8 mx-auto">
            <form onSubmit={createNewAppointment} className="bg-white p-5 bordered">
              <div className="form-group">
                <label htmlFor="nombre">Name of Pet</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="nombre"
                  name="name"
                  placeholder="Name of Pet"
                  onChange={updateState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="propietario">Name of the Owner</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="propietario"
                  name="owner"
                  placeholder="Name of the Owner"
                  onChange={updateState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="telephone">Telephone</label>
                <input
                  type="tel"
                  className="form-control form-control-lg"
                  id="telephone"
                  name="telephone"
                  placeholder="Telephone"
                  onChange={updateState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="fecha">Registration date</label>
                <input
                  type="date"
                  className="form-control form-control-lg"
                  id="fecha"
                  name="date"
                  onChange={updateState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="hora">Time of registration</label>
                <input
                  type="time"
                  className="form-control form-control-lg"
                  id="hora"
                  name="hour"
                  onChange={updateState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="sintomas">Symptoms</label>
                <textarea
                  className="form-control"
                  name="symptoms"
                  rows="6"
                  onChange={updateState}
                ></textarea>
              </div>

              <input
                type="submit"
                className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold"
                value="Create appointment"
              />
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(NewAppointment);
