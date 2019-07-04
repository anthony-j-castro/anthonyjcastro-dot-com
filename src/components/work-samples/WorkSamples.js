// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import queryString from 'query-string';
import slugify from 'slugify';

import type { WorkSample as TWorkSample } from 'types';

import workSamples from 'data/workSamples';

import withPageTracking from 'components/withGoogleAnalyticsPageTracking';
import InfoBox from 'components/InfoBox';
import WorkSample from './WorkSample';

const pageTitle = 'Work Samples | Anthony J. Castro';

type Props = {|
  location: Location,
|};

const workSamplesWithIds: TWorkSample[] = workSamples.map((workSample: TWorkSample) => {
  const workSampleCopy = { ...workSample };
  workSampleCopy.id = slugify(`work-sample-${workSampleCopy.employer}-${workSampleCopy.name}`, { lower: true });
  return workSampleCopy;
});

const WorkSamples = (props: Props) => {
  const { location } = props;
  const params = queryString.parse(location.search);
  let filteredWorkSamples = workSamplesWithIds;

  let filter;

  if (params.employer) {
    filter = params.employer;
    filteredWorkSamples = filteredWorkSamples.filter((workSample) => workSample.employer === filter);
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <h1>Work Samples</h1>
      {filter !== undefined && (
        <InfoBox>
          You are viewing a filtered subset of my work samples.
          <br />
          <Link to="/work-samples">View all work samples</Link> instead.
        </InfoBox>
      )}
      <section id="work-samples">
        {filteredWorkSamples.map((workSample, i) => (
          <React.Fragment key={workSample.id}>
            {i > 0 &&
              <hr />
            }
            <WorkSample workSample={workSample} />
          </React.Fragment>
        ))}
      </section>
    </React.Fragment>
  );
};

export default withPageTracking(pageTitle)(WorkSamples);
