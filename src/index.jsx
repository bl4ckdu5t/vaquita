/**
 *  AlleyHoop
 *  @author Joseph Rex
 *  @since 06-04-2017
 */
import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Home';

render((
  <Router>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </Router>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
