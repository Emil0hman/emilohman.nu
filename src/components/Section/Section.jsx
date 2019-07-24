import React from 'react';
import './Section.css';

export default class Section extends React.Component {
  render() {
    return (
      <div className="section">
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}
