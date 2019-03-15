import React from 'react';
import PropTypes from 'prop-types';

import shortid from 'shortid';

import WorkSampleImage from './WorkSampleImage';
import WorkSampleVideo from './WorkSampleVideo';

import './WorkSample.css';

const WorkSample = (props) => {
  const { workSample } = props;

  return (
    <React.Fragment>
      <div className="work-sample">
        <span className="work-sample-employer-and-date">
          {workSample.employer} / {workSample.date}
        </span>
        <h2>{workSample.name}</h2>
        <div>
          {workSample.description.map((descriptionItem) => {
            if (Array.isArray(descriptionItem)) {
              return (
                <ul key={shortid.generate()}>
                  {descriptionItem.map((item) => (<li key={shortid.generate()}>{item}</li>))}
                </ul>
              );
            }

            return <p key={shortid.generate()}>{descriptionItem}</p>;
          })}
        </div>
        {workSample.mediaGroups.map((mediaGroup) => (
          <div className="work-sample-media-group-container" key={shortid.generate()}>
            {mediaGroup.name && (
              <h3>{mediaGroup.name}</h3>
            )}
            <div className="work-sample-media-group">
              {mediaGroup.media.map((media) => {
                if (media.type === 'image') {
                  return <WorkSampleImage key={shortid.generate()} media={media} />;
                } else if (media.type === 'video') {
                  return <WorkSampleVideo key={shortid.generate()} media={media} />;
                }

                return null;
              })}
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

WorkSample.propTypes = {
  workSample: PropTypes.exact({
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
