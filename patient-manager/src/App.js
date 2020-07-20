import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Patients from './components/Patients';
import NewAppointment from './components/NewAppointment';
import Appointment from './components/Appointment';

function App() {
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
