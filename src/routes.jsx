import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/presentation/Home/index';
import Dashboard from './components/presentation/Dashboard/index';

render((
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </Router>
), document.getElementById('root'));
