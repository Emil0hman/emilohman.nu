import React from 'react';
import './Websites.css';

// Components
import Section from '../Section';
import ProjectCard from '../ProjectCard';

// Assets
import MRK from '../../assets/MRK.png';

// Animations
import Animate from 'react-reveal/Fade';

export default class Websites extends React.Component {
  render() {
    return (
      <div className={"websites"}>
        <Section title="Websites">
          <div className="gridContainer">
            <Animate><ProjectCard title="mittroligaklassrum.se" img={MRK} demoLink="http://mittroligaklassrum.se" desc="Built with React, React Router, PHP, MySQL and SQL" /></Animate>
          </div>
        </Section>
      </div>
    );
  }
}
