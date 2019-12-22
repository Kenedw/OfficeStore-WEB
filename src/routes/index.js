import React from 'react';
import { Switch } from 'react-router-dom';

import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import Route from './route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
    </Switch>
  );
}
