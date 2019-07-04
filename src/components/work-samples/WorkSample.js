// @flow
import * as React from 'react';

import type { WorkSample as TWorkSample } from 'types';

import WorkSampleImage from './WorkSampleImage';
import WorkSampleVideo from './WorkSampleVideo';

import './WorkSample.css';

type Props = {|
  workSample: TWorkSample,
|};

const WorkSample = ({ workSample }: Props) => (
  <div className="work-sample">
    <span className="work-sample-employer-and-date">
      {workSample.employer} / {workSample.date}
    </span>
    <h2>{workSample.name}</h2>
    <div>
      {workSample.description.map((descriptionItem, i) => {
        if (Array.isArray(descriptionItem)) {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <ul key={i}>
              {/* eslint-disable-next-line react/no-array-index-key */}
              {descriptionItem.map((item, j) => (<li key={j}>{item}</li>))}
            </ul>
          );
        }

        // eslint-disable-next-line react/no-array-index-key
        return <p key={i}>{descriptionItem}</p>;
      })}
    </div>
    {workSample.mediaGroups.map((mediaGroup, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className="work-sample-media-group-container" key={i}>
        {mediaGroup.name && (
          <h3>{mediaGroup.name}</h3>
        )}
        <div className="work-sample-media-group">
          {mediaGroup.media.map((media, j) => {
            if (media.type === 'image') {
              // eslint-disable-next-line react/no-array-index-key
              return <WorkSampleImage key={j} media={media} />;
            } else if (media.type === 'video') {
              // eslint-disable-next-line react/no-array-index-key
              return <WorkSampleVideo key={j} media={media} />;
            }

            return null;
          })}
        </div>
      </div>
    ))}
  </div>
);

export default WorkSample;
