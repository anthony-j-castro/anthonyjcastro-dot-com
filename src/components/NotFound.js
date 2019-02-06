import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

import './NotFound.css';

class NotFound extends Component {
  componentDidMount() {
    ReactGA.event({
      category: 'Error',
      action: '404',
    });
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>404 Error | Anthony J. Castro</title>
        </Helmet>
        <h1 className="h1-404">404 Error</h1>
        <section id="404">
          <p>
            Oops, sorry about that!
          </p>
          <p>
            Either something is missing or you clicked on a bad link. You can try <Link to="/">starting over from the home page</Link>, or <Link to="/contact">contact me</Link> if you can&#39;t find what you&#39;re looking for.
          </p>
        </section>
      </React.Fragment>
    );
  }
}

export default NotFound;
