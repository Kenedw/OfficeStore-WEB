import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
    </Switch>
  );
}
