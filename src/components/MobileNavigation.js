// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';

import './MobileNavigation.css';

const MobileNavigation = () => (
  <nav id="mobile-nav">
    <NavLink exact to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/work-samples">Work Samples</NavLink>
    <NavLink to="/resume">Résumé</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </nav>
);

export default MobileNavigation;
