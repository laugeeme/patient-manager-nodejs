import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Patients from './components/Patients';
import NewAppointment from './components/NewAppointment';
import Appointment from './components/Appointment';

import clientAxios from './config/axios';

function App() {
  //app state
  const [appointments, saveAppointments] = useState([]);

  useEffect(() => {
    //From here we will consume our external api
    const consultApi = () => {
      clientAxios
        .get('/patients')
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    consultApi();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Patients} />
        <Route exact path="/new" component={NewAppointment} />
        <Route exact path="/appointment/:id" component={Appointment} />
      </Switch>
    </Router>
  );
}

export default App;
