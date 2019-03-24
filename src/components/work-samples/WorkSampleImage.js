import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

import PropTypes from 'prop-types';

import Octicon, { Search } from '@githubprimer/octicons-react';

import './WorkSampleImage.css';

class WorkSampleImage extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
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

WorkSampleImage.propTypes = {
  media: PropTypes.exact({
    type: PropTypes.oneOf(['image']).isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    file: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};

export default WorkSampleImage;
