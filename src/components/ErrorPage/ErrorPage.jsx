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
    return (
      <div className={"errorPage "}>
        <h1>{this.props.error}</h1>
        <h2>{errorTexts[this.props.error]}</h2>
      </div>
    );
  }
}
