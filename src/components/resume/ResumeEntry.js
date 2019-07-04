// @flow
import * as React from 'react';
import { OutboundLink } from 'react-ga';
import { Link } from 'react-router-dom';
import Parser from 'html-react-parser';
import domToReact from 'html-react-parser/lib/dom-to-react';
import slugify from 'slugify';

import type { ResumeEntry as TResumeEntry, Position } from 'types';

import './ResumeEntry.css';

type Props = {|
  entry: TResumeEntry,
|};

const parserOptions = {
  replace: (domNode) => {
    if (domNode.name === 'outboundlink') {
      return <OutboundLink eventLabel={domNode.attribs.eventlabel} to={domNode.attribs.to} target="_blank" rel="noopener noreferrer">{domToReact(domNode.children)}</OutboundLink>;
    }

    return null;
  },
};

const ResumeEntry = (props: Props) => {
  const { entry } = props;

  return (
    <div className="resume-entry">
      <h2>{entry.employer}</h2>
      {entry.positions.map((position: Position, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="resume-entry-position" key={i}><strong>{position.title}</strong> <span className="resume-entry-position-dates">{position.dateStart} - {position.dateEnd}</span></div>
      ))}
      <div className="resume-entry-technologies">
        <span className="resume-entry-technology-heading">Applied Technologies / Skills</span>
        <ul className="resume-entry-technology-list">
          {entry.technologies.map((technology: string) => (
            <li className="resume-entry-technology" key={slugify(technology, { lower: true })}>{technology}</li>
          ))}
        </ul>
      </div>
      <div>
        {entry.description.map((paragraph: string, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={i}>{Parser(paragraph, parserOptions)}</p>
        ))}
      </div>
      {entry.hasWorkSamples && (
        <div className="resume-entry-work-samples-link">
          <Link to={`/work-samples?employer=${entry.employer}`}>Work samples from {entry.employer}</Link>
        </div>
      )}
    </div>
  );
};

export default ResumeEntry;
