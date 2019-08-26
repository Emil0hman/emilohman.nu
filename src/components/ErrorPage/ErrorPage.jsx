import React from 'react';
import './ErrorPage.css';

const errorTexts = {
  "400": "Bad Request",
  "401": "Unauthorized",
  "403": "Forbidden",
  "404": "The page you are loking for doesn't exist",
  "500": "Internal Server Error",
  "501": "Not Implemented",
  "502": "Bad Gateway",
}

export default class ErrorPage extends React.Component {
  render() {
    const errorMsg = errorTexts[this.props.error];
    document.title = `${this.props.error}: ${errorMsg} - Emil Öhman`;
    return (
      <div className={"errorPage "}>
        <h1>{this.props.error}</h1>
        <h2>{errorMsg}</h2>
      </div>
    );
  }
}
