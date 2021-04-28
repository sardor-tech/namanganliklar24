import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav-header/for-nav.css';
import './covid-part/covidpr.css';

import reportWebVitals from './reportWebVitals';

import Router from "./Router/Router";



ReactDOM.render(
  <React.StrictMode>
    <Router/>,
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
