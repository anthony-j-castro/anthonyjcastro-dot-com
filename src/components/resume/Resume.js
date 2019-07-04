// @flow
import * as React from 'react';
import { OutboundLink } from 'react-ga';
import { Helmet } from 'react-helmet';
import slugify from 'slugify';

import type { ResumeEntry as TResumeEntry } from 'types';

import resume from 'data/resume';

import withPageTracking from 'components/withGoogleAnalyticsPageTracking';
import InfoBox from 'components/InfoBox';
import ResumeEntry from './ResumeEntry';

const pageTitle = 'Résumé | Anthony J. Castro';

const resumeWithIds: TResumeEntry[] = resume.map((entry: TResumeEntry) => {
  const entryCopy = { ...entry };
  entryCopy.id = slugify(`resume-entry-${entryCopy.employer}`, { lower: true });
  return entryCopy;
});

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
      {resumeWithIds.map((entry: TResumeEntry, i) => (
        <React.Fragment key={entry.id}>
          {i > 0 &&
            <hr />
          }
          <ResumeEntry entry={entry} />
        </React.Fragment>
      ))}
    </section>
  </React.Fragment>
);

export default withPageTracking(pageTitle)(Resume);
