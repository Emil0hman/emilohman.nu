import React from 'react';
import './Article.css';

import Section from '../Section';

export default class Article extends React.Component {
  generateBody() {
    let lst = [];
    for (let [idx, i] of this.props.body.split('<br>').entries()) {
      lst.push(<span key={idx}>{i}<br /></span>)
    }

    return lst;
  }
  
  render() {
    return (
      <div className={"Article "}>
        <Section title={this.props.title}>
          <span>{this.generateBody()}</span>
        </Section>
      </div>
    );
  }
}
