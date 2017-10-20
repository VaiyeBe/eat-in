import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import NotFound from './containers/NotFound';

export default () =>
  <Switch>
    <Route path="/" exact component={ Home } />
    <Route path="/login" exact component={ Login } />
    <AppliedRoute path="/signup" exact component={ Signup } props={ childProps} />
    {/* Unmatched Routes */}
    <Route component={ NotFound } />
  </Switch>;
