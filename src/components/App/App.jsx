import React from 'react';
import './App.css';

// Components
import Header from '../Header';
import Skills from '../Skills';
import Projects from '../Projects';
import Footer from '../Footer';
import ErrorPage from '../ErrorPage';

export default class App extends React.Component {
  render() {
    // Handle ErrorPages
    const error = new URL(window.location.href).searchParams.get("error"); // Get the error URL parameter
    if (error === "400") return <ErrorPage text="400" sub="Bad Request" />;
    if (error === "401") return <ErrorPage text="401" sub="Unauthorized" />;
    if (error === "403") return <ErrorPage text="403" sub="Forbidden" />;
    if (error === "404") return <ErrorPage text="404" sub="The page you are looking for does not exist" />;
    if (error === "500") return <ErrorPage text="500" sub="Internal Server Error" />;
    if (error === "501") return <ErrorPage text="501" sub="Not Implemented" />;
    if (error === "502") return <ErrorPage text="502" sub="Bad Gateway" />;

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
