import React from 'react';
import PropTypes from 'prop-types';

import Octicon, { Info } from '@primer/octicons-react';

import './InfoBox.css';

const InfoBox = (props) => {
  const { children } = props;

  return (
    <div className="infobox">
      <Octicon icon={Info} size="small" />
      <div className="infobox-copy">
        {children}
      </div>
    </div>
  );
};

InfoBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InfoBox;
