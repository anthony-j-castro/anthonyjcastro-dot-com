// @flow
import * as React from 'react';
import ReactGA from 'react-ga';

type Props = {|
  location: Location
|};

const withGoogleAnalyticsPageTracking = (pageTitle?: string) => (PageComponent: React.ComponentType<Props>) => {
  class PageComponentWithAnalytics extends React.PureComponent<Props> {
    componentDidMount() {
      this.firePageview();
    }

    componentDidUpdate(prevProps: Props) {
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

      const fields: {
        page: string,
        title?: string
      } = {
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

  return PageComponentWithAnalytics;
};

export default withGoogleAnalyticsPageTracking;
