import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App';
import Register from '../components/Register';

import Home from '../conatiners/Home';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
      <Route path='home' component={Home}/>
    <IndexRoute component={Register}/>
      <Route path='register' component={Register}/>
  </Route>
);