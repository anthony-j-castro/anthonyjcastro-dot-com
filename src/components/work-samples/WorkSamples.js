import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import queryString from 'query-string';
import shortid from 'shortid';

import workSamples from 'data/workSamples';

import withPageTracking from 'components/withGoogleAnalyticsPageTracking';
import InfoBox from 'components/InfoBox';
import WorkSample from './WorkSample';

const pageTitle = 'Work Samples | Anthony J. Castro';

const getNewStateOnUpdate = (props) => {
  const params = queryString.parse(props.location.search);

  const filters = {};
  let filteredWorkSamples = workSamples;

  if (params.employer) {
    filters.employer = params.employer;
    filteredWorkSamples = filteredWorkSamples.filter((workSample) => workSample.employer === filters.employer);
  }

  return {
    filteredWorkSamples,
    filters,
  };
};

class WorkSamples extends Component {
  constructor(props) {
    super(props);
    this.state = getNewStateOnUpdate(props);
  }

  componentWillReceiveProps(props) {
    this.setState(getNewStateOnUpdate(props));
  }

  render() {
    const {
      filteredWorkSamples,
      filters,
    } = this.state;

    return (
      <React.Fragment>
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
        <h1>Work Samples</h1>
        {(Object.keys(filters).length > 0) && (filters.constructor === Object) && (
          <InfoBox>
            You are viewing a filtered subset of my work samples.
            <br />
            <Link to="/work-samples">View all work samples</Link> instead.
          </InfoBox>
        )}
        <section id="work-samples">
          {filteredWorkSamples.map((workSample, i) => (
            <React.Fragment key={shortid.generate()}>
              {i > 0 &&
                <hr />
              }
              <WorkSample workSample={workSample} />
            </React.Fragment>
          ))}
        </section>
      </React.Fragment>
    );
  }
}

export default withPageTracking(pageTitle)(WorkSamples);
