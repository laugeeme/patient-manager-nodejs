import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Patients from './components/Patients';
import NewAppointment from './components/NewAppointment';
import Appointment from './components/Appointment';

import clientAxios from './config/axios';

function App() {
  //app state
  const [appointments, saveAppointments] = useState([]);
  const [consult, saveConsult] = useState(true);

  useEffect(() => {
    //From here we will consume our external api
    if (consult) {
      const consultApi = () => {
        clientAxios
          .get('/patients')
          .then((response) => {
            //put result in the state
            saveAppointments(response.data);

            //disable consult
            saveConsult(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      consultApi();
    }
  }, [consult]);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Patients appointments={appointments} />}
        />
        <Route
          exact
          path="/new"
          component={() => <NewAppointment saveConsult={saveConsult} />}
        />
        <Route
          exact
          path="/appointment/:id"
          render={(props) => {
            const appointment = appointments.filter(
              (appointment) => appointment._id === props.match.params.id
            );
            return <Appointment appointment={appointment[0]} />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
