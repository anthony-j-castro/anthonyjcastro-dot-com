import React from 'react';
import PropTypes from 'prop-types';

import WorkSampleImage from './WorkSampleImage';
import WorkSampleVideo from './WorkSampleVideo';

import './WorkSample.css';

const WorkSample = (props) => {
  const { workSample } = props;

  return (
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
};

WorkSample.propTypes = {
  workSample: PropTypes.exact({
    id: PropTypes.string.isRequired,
    employer: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ])).isRequired,
    mediaGroups: PropTypes.arrayOf(PropTypes.exact({
      name: PropTypes.string,
      media: PropTypes.arrayOf(PropTypes.exact({
        type: PropTypes.oneOf(['image', 'video']),
        label: PropTypes.string.isRequired,
        name: PropTypes.string,
        file: PropTypes.string.isRequired,
        poster: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
      })),
    })),
  }).isRequired,
};

export default WorkSample;
