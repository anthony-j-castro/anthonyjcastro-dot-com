import React, { Component } from 'react';
import ReactGA from 'react-ga';

import PropTypes from 'prop-types';

import './WorkSampleVideo.css';

class WorkSampleVideo extends Component {
  constructor(props) {
    super(props);

    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleEnded = this.handleEnded.bind(this);
  }

  handlePlay() {
    const { media } = this.props;
    const { label } = media;

    ReactGA.event({
      category: 'Work Sample Video',
      action: 'Play',
      label,
    });
  }

  handlePause() {
    const { media } = this.props;
    const { label } = media;

    ReactGA.event({
      category: 'Work Sample Video',
      action: 'Pause',
      label,
    });
  }

  handleEnded() {
    const { media } = this.props;
    const { label } = media;

    ReactGA.event({
      category: 'Work Sample Video',
      action: 'Complete',
      label,
    });
  }

  render() {
    const { media } = this.props;

    return (
      <React.Fragment>
        <div className="work-sample-media">
          {media.name &&
            <h3>{media.name}</h3>
          }
          <video
            className="work-sample-video"
            src={`${process.env.PUBLIC_URL}/videos/${media.file}`}
            poster={`${process.env.PUBLIC_URL}/images/${media.poster}`}
            onPlay={this.handlePlay}
            onPause={this.handlePause}
            onEnded={this.handleEnded}
            style={{ maxWidth: `${media.width}px` }}
            playsInline
            controls
            controlsList="nodownload"
            muted
          />
        </div>
      </React.Fragment>
    );
  }
}

WorkSampleVideo.propTypes = {
  media: PropTypes.exact({
    type: PropTypes.oneOf(['video']).isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    file: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};

export default WorkSampleVideo;
