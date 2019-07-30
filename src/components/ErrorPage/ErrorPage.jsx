import React from 'react';
import './ErrorPage.css';

export default class ErrorPage extends React.Component {
  render() {
    return (
      <div className={"errorPage "}>
        <h1>{this.props.text}</h1>
        <h2>{this.props.sub}</h2>
      </div>
    );
  }
}
