// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Root from './Root';

const root = document.getElementById('root');
if (root !== null) {
  ReactDOM.render(<Root />, root);
}
