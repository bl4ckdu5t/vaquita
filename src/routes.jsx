import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/view/Home/index';
import Dashboard from './components/view/Dashboard/index';

render((
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </Router>
), document.getElementById('root'));
