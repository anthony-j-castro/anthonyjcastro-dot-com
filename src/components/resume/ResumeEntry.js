import React from 'react';
import { OutboundLink } from 'react-ga';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Parser from 'html-react-parser';
import domToReact from 'html-react-parser/lib/dom-to-react';
import shortid from 'shortid';

import './ResumeEntry.css';

const parserOptions = {
  replace: (domNode) => {
    if (domNode.name === 'outboundlink') {
      return <OutboundLink eventLabel={domNode.attribs.eventlabel} to={domNode.attribs.to} target="_blank" rel="noopener noreferrer">{domToReact(domNode.children)}</OutboundLink>;
    }

    return null;
  },
};

const ResumeEntry = (props) => {
  const { entry } = props;

  return (
    <React.Fragment>
      <div className="resume-entry">
        <h2>{entry.employer}</h2>
        {entry.positions.map((position) => (
          <div className="resume-entry-position" key={shortid.generate()}><strong>{position.title}</strong> <span className="resume-entry-position-dates">{position.dateStart} - {position.dateEnd}</span></div>
        ))}
        <div className="resume-entry-technologies">
          <span className="resume-entry-technology-heading">Applied Technologies / Skills</span>
          <ul className="resume-entry-technology-list">
            {entry.technologies.map((technology) => (
              <li className="resume-entry-technology" key={shortid.generate()}>{technology}</li>
            ))}
          </ul>
        </div>
        <div>
          {entry.description.map((paragraph) => (
            <p key={shortid.generate()}>{Parser(paragraph, parserOptions)}</p>
          ))}
        </div>
        {entry.hasWorkSamples && (
          <div className="resume-entry-work-samples-link">
            <Link to={`/work-samples?employer=${entry.employer}`}>Work samples from {entry.employer}</Link>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

ResumeEntry.propTypes = {
  entry: PropTypes.exact({
    employer: PropTypes.string.isRequired,
    dateStart: PropTypes.string.isRequired,
    dateEnd: PropTypes.string.isRequired,
    positions: PropTypes.arrayOf(PropTypes.exact({
      title: PropTypes.string.isRequired,
      dateStart: PropTypes.string.isRequired,
      dateEnd: PropTypes.string.isRequired,
    })),
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    hasWorkSamples: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ResumeEntry;
