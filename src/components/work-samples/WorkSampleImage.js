// @flow
/* eslint-disable react/jsx-no-target-blank */
import * as React from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import Octicon, { Search } from '@primer/octicons-react';

import type { Image } from 'types';

import './WorkSampleImage.css';

type Props = {|
  media: Image,
|};

class WorkSampleImage extends React.Component<Props> {
  handleClick = () => {
    const { media } = this.props;
    const { label } = media;

    ReactGA.event({
      category: 'Work Sample Image',
      action: 'View Full Size',
      label,
    });
  }

  render() {
    const { media } = this.props;

    return (
      <div className="work-sample-media">
        {media.name &&
          <h4>{media.name}</h4>
        }
        <Link className="work-sample-image-link" to={`images/${media.file}`} onClick={this.handleClick} target="_blank">
          <img src={`${process.env.PUBLIC_URL}/images/${media.file}`} alt={media.name} draggable="false" />

          <div className="work-sample-image-hover">
            <Octicon icon={Search} size="large" />
            <span className="work-sample-image-hover-text">View full size image</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default WorkSampleImage;
