import React from 'react';
import './ProjectCard.css';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptop } from '@fortawesome/free-solid-svg-icons'

export default class ProjectCard extends React.Component {
  codeButton() {
    if (this.props.codeLink === "" || this.props.codeLink === undefined) return <span className="private"><FontAwesomeIcon icon={faCode} /> Code Private</span>
    return <a target="_blank" rel="noopener noreferrer" href={this.props.codeLink}><FontAwesomeIcon icon={faCode} /> View Code</a>
  }

  demoButton() {
    if (this.props.demoLink === "" || this.props.demoLink === undefined) return <span className="private"><FontAwesomeIcon icon={faLaptop} /> No Demo Avaliable</span>
    return <a target="_blank" rel="noopener noreferrer" href={this.props.demoLink}><FontAwesomeIcon icon={faLaptop} /> View Demo</a>
  }

  render() {
    return (
      <div className={"projectCard"}>
        <img src={this.props.img} alt={this.props.title} />
        <div className="text">
          <h2>{this.props.title}</h2>
          {this.codeButton()}
          {this.demoButton()}<br />
          <p>{this.props.desc}</p>
        </div>
      </div>
    );
  }
}
