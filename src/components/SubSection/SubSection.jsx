import React from 'react';
import './SubSection.css';

export default class SubSection extends React.Component {
  generateList(list) {
    let entries = [];
    for (let [idx, e] of list.entries()) entries.push(<li key={idx}>{e}</li>);

    return <ul>{entries}</ul>;
  }

  render() {
    return (
      <div className="subSection">
        <h2>{this.props.title}</h2>
        {this.generateList(this.props.list)}
      </div>
    );
  }
}
