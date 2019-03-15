import config from 'config';

import React from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

import App from './App';

ReactGA.initialize(config.GOOGLE_ANALYTICS_ID, {
  debug: (process.env.NODE_ENV !== 'production'),
});

const ExtendedApp = withRouter(App);

const AppWithRouter = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <ExtendedApp />
  </Router>
);

export default AppWithRouter;
