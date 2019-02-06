import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './About.css';

import avatar from 'images/me.png';

const About = () => (
  <React.Fragment>
    <Helmet>
      <title>About Me | Anthony J. Castro</title>
    </Helmet>
    <h1>About Me</h1>
    <section id="about">
      <img src={avatar} alt="Anthony J. Castro" id="avatar" width="200" height="200" draggable="false" />
      <div id="about-copy">
        <p>
          I completed my B.S. in Computer Science with a minor in Film and Media Studies from Lafayette College in 2012 and have spent the last 6+ years working as a web engineer for several companies across various industries, primarily advertising and publishing.
        </p>
        <p>
          In 2015 I completed the User Experience Design course at General Assembly to supplement my web development skills. Although my current day-to-day work does not strictly focus on researching and architecting user experiences, I use that knowledge to inform the decisions I <em>do</em> get to make.
        </p>
        <p>
          I have worked on the full stack of several projects, but my real passion is developing interfaces and experiences that the user interacts with (but you probably already derived that from my interests in UX!). Working on the front end is a fun but important challenge for me; to me, an application&#39;s UI is a constant stream of make-or-break moments that shape a user&#39;s entire impression of the system.
        </p>
        <p>
          On a more personal note, I enjoy cooking and baking in my free time. I also love traveling the world and make sure to do it at least once a year; so far, I&#39;ve visited countries in Europe and Africa, and I&#39;m hoping to cross Asia and Oceania off my list soon.
        </p>
        <p>
          I live in New York, NY, with my partner and two rescue chihuahuas, Finn and Sawyer.
        </p>
        <p>
          That&#39;s just a little about me. If you want to learn more you should check out <Link to="/resume">what I’ve been up to</Link> or <Link to="/contact">get in touch with me</Link>!
        </p>
      </div>
    </section>
  </React.Fragment>
);

export default About;
