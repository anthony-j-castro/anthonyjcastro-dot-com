// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import withPageTracking from 'components/withGoogleAnalyticsPageTracking';
import Greeting from 'components/svg/Greeting';
import Signature from 'components/svg/Signature';

import './Home.css';

const pageTitle = 'Anthony J. Castro | Web Engineer';

const Home = () => (
  <React.Fragment>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>
    <section id="home">
      <div className="greeting-container">
        <Greeting className="greeting" />
      </div>
      <p>
        I’m Anthony. I&#39;m a web engineer with a passion for building clean, usable applications and interfaces.
      </p>
      <p>
        Take a look around to <Link to="/about">learn more about me</Link>. You can also see what <Link to="/resume">I&#39;ve been up to professionally</Link> or check out some samples of the <Link to="/work-samples">work I&#39;ve done</Link>.
      </p>
      <p>
        Want to get in touch? Find out how to <Link to="/contact">contact me</Link>.
      </p>
      <div className="signature-container">
        <Signature className="signature" />
      </div>
    </section>
  </React.Fragment>
);

export default withPageTracking(pageTitle)(Home);
