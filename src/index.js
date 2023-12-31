import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
