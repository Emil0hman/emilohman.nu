import React from 'react';
import './Projects.css';

// Components
import Section from '../Section';
import ProjectCard from '../ProjectCard';

// Assets
import URLShortener from '../../assets/urlshortener.png';
import Clock from '../../assets/clock.png';
import RPS from '../../assets/rockpaperscissors.png';

// Animations
import Animate from 'react-reveal/Fade';

export default class Projects extends React.Component {
  render() {
    return (
      <div className={"projects"}>
        <Section title="Projects">
          <div className="gridContainer">
            <Animate><ProjectCard title="URL Shortener" img={URLShortener} codeLink="https://github.com/Emil0hman/urlshortener" demoLink="http://emilohman.nu/projects/url" /></Animate>
            
            <Animate><ProjectCard title="Clock" img={Clock} codeLink="https://github.com/Emil0hman/clock" demoLink="http://emilohman.nu/projects/clock" /></Animate>

            <Animate><ProjectCard title="Rock, Paper, Scissors" img={RPS} codeLink="https://github.com/Emil0hman/rock-paper-scissors" demoLink="http://emilohman.nu/projects/rps" /></Animate>
          </div>
        </Section>
      </div>
    );
  }
}
