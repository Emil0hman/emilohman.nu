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
    const error = this.props.error;
    const errorMsg = errorTexts[error];
    document.title = `${error}: ${errorMsg} - Emil Öhman`;
    return (
      <div className={"errorPage "}>
        <h1>{error}</h1>
        <h2>{errorMsg}</h2>
      </div>
    );
  }
}
