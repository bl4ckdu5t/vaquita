/**
 *  AlleyHoop
 *  @author Joseph Rex
 *  @since 06-04-2017
 */
import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/presentation/index';

render((
  <Router>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </Router>
), document.getElementById('root'));
