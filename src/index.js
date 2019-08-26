import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './helpers/serviceWorker';

// Easter-egg
console.log('%c Sneaky, huh ', 'background: lightBlue; color: blue');

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
