import React from 'react';
import { OutboundLink } from 'react-ga';
import { Helmet } from 'react-helmet';

const Contact = () => (
  <React.Fragment>
    <Helmet>
      <title>Contact Me | Anthony J. Castro</title>
    </Helmet>
    <h1>Contact Me</h1>
    <section id="contact">
      <p>
        I&#39;m more than just some pixels on a screen! If you&#39;re interested in getting in touch or learning more about me, drop me an email at <OutboundLink eventLabel="Email" to="mailto:hello@anthonyjcastro.com" target="_blank" rel="noopener noreferrer">hello@anthonyjcastro.com</OutboundLink>.
      </p>
      <p>
        You can also check out my profiles on  and <OutboundLink eventLabel="LinkedIn Profile" to="https://www.linkedin.com/in/anthonyjcastro/" target="_blank" rel="noopener noreferrer">LinkedIn</OutboundLink> and <OutboundLink eventLabel="GitHub Profile" to="https://github.com/anthony-j-castro" target="_blank" rel="noopener">GitHub</OutboundLink> (where you can <OutboundLink eventLabel="Project Source on GitHub" to="https://github.com/anthony-j-castro/anthonyjcastro-dot-com" target="_blank" rel="noopener">view the source of this site</OutboundLink>).
      </p>
    </section>
  </React.Fragment>
);

export default Contact;
