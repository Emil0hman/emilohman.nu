import React from 'react';
import './App.css';

// Components
import Header from '../Header';
import Skills from '../Skills';
import Projects from '../Projects';
import Websites from '../Websites';
import Footer from '../Footer';
import ErrorPage from '../ErrorPage';

export default class App extends React.Component {
  render() {
    // Handle ErrorPages
    const error = new URL(window.location.href).searchParams.get("error"); // Get the error URL parameter
    const errors = ["400", "401", "403", "404", "500", "501", "502"];
    if (errors.includes(error)) return <ErrorPage error={error} />

    return (
      <div className="App">
        <Header />
        <Skills />
        <Projects />
        <Websites />
        <Footer />
      </div>
    );
  }
}
