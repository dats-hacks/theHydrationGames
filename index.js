import React, { Component } from 'react'
import { render } from 'react-dom'


import { Router, Route, browserHistory, IndexRoute } from 'react-router';
//import { syncHistoryWithStore } from 'react-router-redux';
//import makeRoutes from './store/routes';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

//App parent component
import App from './components/App'
// import Home from './containers/Home'

let store = createStore(combineReducers);


render (
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
);