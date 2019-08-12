import React from 'react';
import './Footer.css';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default class Footer extends React.Component {
  render() {
    return (
      <div className={"footer "}>
        <a href="mailto:mail@emilohman.nu"><FontAwesomeIcon icon={faEnvelope} /> </a>
        <a href="https://github.com/Emil0hman" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        <h3>Emil Öhman 2019</h3>
      </div>
    );
  }
}
