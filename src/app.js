"use strict";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import './scss/app.scss';
// import { HashLink as Link } from 'react-router-hash-link';

// Module requires
import Menu from './components/menu';
import Archive from './archive';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

// return routes
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

  render() {
    return (
      <div>
        <div className="loaderSmall">
          <img className="loadingImg" src={require("./img/tits.gif")} width="400"/>
        </div>
        <Router history={browserHistory}>
          <Route path={'/'} component={Home} />
          <Route path={'/archive'} component={Archive} />
        </Router>
      </div>
    )
  }
}

class Home extends React.Component {

  render() {
    return(
      <div>
        <div className="background-img"></div>
        <Menu />
        <div className="container">
          <div className="hero-bckgound"></div>
          <About />
          <Contact url="php/mailer.php"/>
          <Footer />
        </div>
      </div>
    )
  }
}

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
