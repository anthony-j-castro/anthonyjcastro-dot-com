import React from 'react';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';

import './Home.css';

import greeting from 'images/greeting.svg';
import signature from 'images/signature.svg';

const Home = () => (
  <section id="home">
    <ReactSVG src={greeting} className="greeting-container" svgClassName="greeting" />
    <p>
      I’m Anthony. I&#39;m a web engineer with a passion for building clean, usable applications and interfaces.
    </p>
    <p>
      Take a look around to <Link to="/about">learn more about me</Link>. You can also see what <Link to="/resume">I&#39;ve been up to professionally</Link> or check out some samples of the <Link to="/work-samples">work I&#39;ve done</Link>.
    </p>
    <p>
      Want to get in touch? Find out how to <Link to="/contact">contact me</Link>.
    </p>
    <ReactSVG src={signature} className="signature-container" svgClassName="signature" />
  </section>
);

export default Home;
