import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav id="main-nav">
    <NavLink exact to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/work-samples">Work Samples</NavLink>
    <NavLink to="/resume">Résumé</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </nav>
);

export default Navigation;
