// @flow
import * as React from 'react';
import { withRouter } from 'react-router-dom';

type Props = {|
  location: Location,
  children?: React.Node,
  scrollCallback: () => void,
|};

class ScrollToTop extends React.Component<Props> {
  componentDidUpdate(prevProps: Props) {
    const {
      location,
      scrollCallback,
    } = this.props;

    if (location !== prevProps.location) {
      scrollCallback();
    }
  }

  render() {
    const { children = null } = this.props;
    return children;
  }
}

export default withRouter(ScrollToTop);
