/*global $:true*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import './scss/app.scss';

// Component imports
import Home from './components/home';
import Archive from './components/archive';

// Image import
// import loadImg from './images/tits.gif';

class App extends Component {

  // Function for anchorlinks
  hashLinkScroll() {
    const { hash } = window.location;
    if (hash !== '') {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView();
      }, 2500);
    }
  }

  render() {
    return (
      <div>
        <div className="loaderSmall">
          <div className="loader-container">
            <div className="after" />
            <div className="after" />
            <div className="after" />
            <div className="after" />
            <div className="after" />
            <div className="after" />
            <div className="after" />
            <div className="after" />
            <div className="after" />
          </div>
        </div>

        <Router history={browserHistory} onUpdate={this.hashLinkScroll}>
          <Route path={'/archive'} component={Archive} />
          <Route path={'*'} component={Home} />
        </Router>
      </div>
    );
  };

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad() {
    $(".loaderSmall").delay(300).fadeOut("slow");
  }
};

ReactDOM.render (
  <App/>,
  document.getElementById('app')
)

// Hot Module Replacement API (injecting code)
if (module.hot) {
	module.hot.accept();
}

export default App;

// <div className="loaderSmall" id="loaderSmall">
//   <div className="pixel-loader"></div>
// </div>

// <div className="loaderSmall">
//   <img className="loadingImg" src={loadImg}/>
// </div>
