// @flow
import * as React from 'react';
import ReactGA from 'react-ga';

import type { Video } from 'types';

import './WorkSampleVideo.css';

type Props = {|
  media: Video,
|};

class WorkSampleVideo extends React.Component<Props> {
  handlePlay = () => {
    const { media } = this.props;
    const { label } = media;

    ReactGA.event({
      category: 'Work Sample Video',
      action: 'Play',
      label,
    });
  }

  handlePause = () => {
    const { media } = this.props;
    const { label } = media;

    ReactGA.event({
      category: 'Work Sample Video',
      action: 'Pause',
      label,
    });
  }

  handleEnded = () => {
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
    );
  }
}

export default WorkSampleVideo;
