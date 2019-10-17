import React from 'react';
import './App.css';

import Articles from '../../assets/articles/articles.json';

// Components
import Header from '../Header';
import Skills from '../Skills';
import Projects from '../Projects';
import Work from '../Work';
import Footer from '../Footer';
import ErrorPage from '../ErrorPage';
import Article from '../Article';

// Import React Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

// Various Minor Components
const Deafult = () => {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Projects />
      <Work />
      <Footer />
    </div>
  )
}

export default class App extends React.Component {
  getArticles() {
    let lst = [];

    for (let [idx, i] of Articles.entries()) {
      lst.push(
        <Route key={idx} exact path={`/${i.link}`} component={
          () => <div className="App"><Article title={i.title} body={i.body} /></div>
        } />
      )
    }
    return lst;
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Deafult} />

          {this.getArticles()}

          <Route exact path="/error/400" component={() => <ErrorPage error="400" />} />
          <Route exact path="/error/401" component={() => <ErrorPage error="401" />} />
          <Route exact path="/error/403" component={() => <ErrorPage error="403" />} />
          <Route exact path="/error/404" component={() => <ErrorPage error="404" />} />
          <Route exact path="/error/500" component={() => <ErrorPage error="500" />} />
          <Route exact path="/error/501" component={() => <ErrorPage error="501" />} />
          <Route exact path="/error/502" component={() => <ErrorPage error="502" />} />

          <Route exact component={() => <ErrorPage error="404" />} />
        </Switch>   
      </Router>
    );
  }
}
