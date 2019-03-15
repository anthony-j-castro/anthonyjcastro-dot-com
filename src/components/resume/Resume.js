import React from 'react';
import { OutboundLink } from 'react-ga';
import { Helmet } from 'react-helmet';

import shortid from 'shortid';

import withPageTracking from 'components/withGoogleAnalyticsPageTracking';

import resume from 'data/resume';

import InfoBox from 'components/InfoBox';
import ResumeEntry from './ResumeEntry';

const pageTitle = 'Résumé | Anthony J. Castro';

const Resume = () => (
  <React.Fragment>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>
    <h1>Résumé</h1>
    <section id="resume">
      <InfoBox>
        Looking for a printable one-sheet version? Send me an email at <OutboundLink eventLabel="Email for Resume" to="mailto:hello@anthonyjcastro.com" target="_blank" rel="noopener noreferrer">hello@anthonyjcastro.com</OutboundLink>.
      </InfoBox>
      {resume.map((entry, i) => (
        <React.Fragment key={shortid.generate()}>
          {i > 0 &&
            <hr />
          }
          <ResumeEntry key={shortid.generate()} entry={entry} />
        </React.Fragment>
      ))}
    </section>
  </React.Fragment>
);

export default withPageTracking(pageTitle)(Resume);
