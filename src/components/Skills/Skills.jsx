import React from 'react';
import './Skills.css';

// Components
import Section from '../Section';
import SubSection from '../SubSection';

const skills = {
  "frontend": ["HTML and CSS", "JavaScript", "SCSS and SASS", "React", "WordPress", "jQuery"],
  "backend": ["Node.js", "Express", "PHP", "Ruby", "Python", "SQL", "Go"],
  "other": ["Electron", "Git", "Microsoft Office", "ZSH and Bash", "Shell Script", "Processing"]
}

export default class Skills extends React.Component {
  render() {
    return (
      <div className="skills">
        <Section title="Skills">
          <div className="gridContainer">
            <SubSection title="Front-End" list={skills.frontend} />
            <SubSection title="Back-End" list={skills.backend} />
            <SubSection title="Other" list={skills.other} />
          </div>
        </Section>
      </div>
    );
  }
}
