import React, { PureComponent } from 'react';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';

const withGoogleAnalyticsPageTracking = (pageTitle) => (PageComponent) => {
  class PageComponentWithAnalytics extends PureComponent {
    componentDidMount() {
      this.firePageview();
    }

    componentDidUpdate(prevProps) {
      const {
        location: {
          pathname,
          search,
        },
      } = this.props;

      if (prevProps.location.pathname === pathname && prevProps.location.search !== search) {
        this.firePageview();
      }
    }

    firePageview() {
      const {
        location: {
          pathname,
          search,
        },
      } = this.props;

      const page = `${pathname}${search}`;

      const fields = {
        page,
      };

      if (pageTitle) {
        fields.title = pageTitle;
      }

      ReactGA.set(fields);
      ReactGA.pageview(page);
    }

    render() {
      return <PageComponent {...this.props} />;
    }
  }

  PageComponentWithAnalytics.propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
    }).isRequired,
  };

  return PageComponentWithAnalytics;
};

export default withGoogleAnalyticsPageTracking;
