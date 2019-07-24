import React from 'react';
import './App.css';

// Components
import Header from '../Header';
import Skills from '../Skills';
import Projects from '../Projects';
import Footer from '../Footer';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Skills />
        <Projects />
        <Footer />
      </div>
    );
  }
}
