import React from 'react';
import './Projects.css';

// Components
import Section from '../Section';
import ProjectCard from '../ProjectCard';

// Assets
import URLShortener from '../../assets/urlshortener.png';
import Clock from '../../assets/clock.png';
import RPS from '../../assets/rockpaperscissors.png';

export default class Projects extends React.Component {
  render() {
    return (
      <div className={"projects"}>
        <Section title="Projects">
          <div className="gridContainer">
            <ProjectCard title="URL Shortener" img={URLShortener} codeLink="https://github.com/Emil0hman/url" demoLink="http://emilohman.nu/projects/urlshortener" />
            <ProjectCard title="Clock" img={Clock} codeLink="https://github.com/Emil0hman/clock" demoLink="http://emilohman.nu/projects/clock" />
            <ProjectCard title="Rock, Paper, Scissors" img={RPS} codeLink="https://github.com/Emil0hman/rock-paper-scissors" demoLink="http://emilohman.nu/projects/rps" />
          </div>
        </Section>
      </div>
    );
  }
}
