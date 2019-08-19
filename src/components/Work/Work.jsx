import React from 'react';
import './Work.css';

// Components
import Section from '../Section';
import ProjectCard from '../ProjectCard';

// Assets
import MRK from '../../assets/MRK.png';

// Animations
import Animate from 'react-reveal/Fade';

export default class Work extends React.Component {
  render() {
    return (
      <div className={"work"}>
        <Section title="Work">
          <div className="gridContainer">
            <Animate><ProjectCard title="mittroligaklassrum.se" img={MRK} demoLink="http://mittroligaklassrum.se" demoText="View Website" codeLink="none" desc="Built with React, React Router, PHP, MySQL and SQL" /></Animate>
          </div>
        </Section>
      </div>
    );
  }
}
