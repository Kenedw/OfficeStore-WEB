import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';
import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import Mycatalog from '~/pages/Mycatalog';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/myCatalog" component={Mycatalog} isPrivate />
    </Switch>
  );
}
