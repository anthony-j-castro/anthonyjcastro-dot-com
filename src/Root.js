import config from 'config';

import React from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

import App from './App';

import withAnalytics, { initAnalytics } from 'react-with-analytics';

initAnalytics(config.GOOGLE_ANALYTICS_ID, {
  debug: (process.env.NODE_ENV !== 'production'),
});
ReactGA.plugin.require('linkid');

const ExtendedApp = withRouter(withAnalytics(App));

const AppWithRouter = () => (
  <React.Fragment>
    <Helmet>
      <title>Anthony J. Castro | Web Engineer</title>
    </Helmet>
    <Router basename={process.env.PUBLIC_URL}>
      <ExtendedApp />
    </Router>
  </React.Fragment>
);

export default AppWithRouter;
