// Code will be executed in "strict mode". For example, you can not use undeclared variables. Makes it easier to write "secure" JavaScript and strict mode changes previously accepted "bad syntax" into real errors.
"use strict";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Scrollchor from 'react-scrollchor';
import './scss/app.scss';

// Component imports
import Menu from './components/menu';
import Archive from './archive';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

class App extends React.Component {

  // function for anchorlinks (scroll to section with specific id)
  hashLinkScroll() {
    const { hash } = window.location;
    if (hash !== '') {
      // Push onto callback queue so it runs after the DOM is updated,
      // this is required when navigating from a different page so that
      // the element is rendered on the page before trying to getElementById
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView();
      }, 100);
    }
  }

  // <Router history={browserHistory} onUpdate={this.hashLinkScroll}>

  // React Router render link to home & archive component + hashLinkScroll function "onUpdate" so anchorlinks will work
  render() {
    return (
      <div>
        <div className="loaderSmall">
          <img className="loadingImg" src={require("./images/tits.gif")} width="400"/>
        </div>
        <Router history={browserHistory} onUpdate={this.hashLinkScroll}>
          <Route path={'/archive'} component={Archive} />
          <Route path={'*'} component={Home} />
        </Router>
      </div>
    );
  };

  // After render add event "load" to "window"-tag and call handleLoad function
  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  // Fade out site-loader
  handleLoad() {
    $(".loaderSmall").delay(100).fadeOut("slow");
  }
};

// Render home page
class Home extends React.Component {
  render() {
    return(
      <div>
        <div className="background-img"></div>
        <Menu />
        <div className="container" id="top">
          <div className="hero"></div>
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  };
};

ReactDOM.render (
  <App/>,
  document.getElementById('app')
)

// Hot module reloader (injecting code)
if(DEVELOPMENT){
	if (module.hot) {
		module.hot.accept();
	}
}
