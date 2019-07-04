// @flow
import * as React from 'react';
import Octicon, { Info } from '@primer/octicons-react';

import './InfoBox.css';

type Props = {|
  children: React.Node,
|};

const InfoBox = (props: Props) => {
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

export default InfoBox;
