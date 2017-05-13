"use strict";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import './scss/app.scss';

// Module requires
import Menu from './components/menu';
import Archive from './archive';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }

  handleLoad() {
  	$(".loader").delay(100).fadeOut("slow");
  	$(".loaderSmall").delay(200).fadeOut("slow");
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  hashLinkScroll = () => {
    const { hash } = window.location;
    if (hash !== '') {
      // Push onto callback queue so it runs after the DOM is updated,
      // this is required when navigating from a different page so that
      // the element is rendered on the page before trying to getElementById.
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView();
      }, 100);

      // var ROOT = $('html, body');
      //
      // $('.goTo').click(function() {
      //   ROOT.animate({
      //       scrollTop: $( $(this).children('a').attr('href')).offset().top-130
      //   }, 600);
      //   return false;
      // });
    }
  }

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
};

class Home extends React.Component {
  render() {
    return(
      <div>
        <div className="background-img"></div>
        <Menu />
        <div className="container">
          <div className="hero" id="top"></div>
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
