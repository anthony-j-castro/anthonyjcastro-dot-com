import { Component } from 'react';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    const {
      location,
      scrollCallback,
    } = this.props;

    if (location !== prevProps.location) {
      scrollCallback();
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

ScrollToTop.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
  scrollCallback: PropTypes.func.isRequired,
};

export default withRouter(ScrollToTop);
