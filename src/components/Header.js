// @flow
import * as React from 'react';
import Media from 'react-media';
import { Link } from 'react-router-dom';

import Navigation from 'components/Navigation';

import './Header.css';

const Header = () => (
  <header id="page-header">
    <Link to="/" id="logo">
      Anthony J. Castro
      <span id="tagline">Web Engineer & UX Enthusiast</span>
    </Link>
    <Media query="(min-width: 601px)">
      { (matches) => (matches ? (<Navigation />) : null) }
    </Media>
  </header>
);

export default Header;
