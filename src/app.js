/*global $:true*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
// import { Router, Route, browserHistory} from 'react-router';

// import { BrowserRouter } from 'react-router-dom'
import './scss/app.scss';

// Component imports
import Home from './components/home';
import Archive from './components/archive';

// Image import
// import loadImg from './images/tits.gif';

class App extends Component {

  // Function for anchorlinks
  // hashLinkScroll() {
  //   const { hash } = window.location;
  //   if (hash !== '') {
  //     setTimeout(() => {
  //       const id = hash.replace('#', '');
  //       const element = document.getElementById(id);
  //       if (element) element.scrollIntoView();
  //     }, 2500);
  //   }
  // }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad() {
    $(".loaderSmall").delay(300).fadeOut("slow");
  }

  render() {
    return (
      <div>
        <div className="loaderSmall" id="loaderSmall">
          <div className="pixel-loader"></div>
        </div>
        <Router>
          <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/archive'} component={Archive} />
            <Route render={() => { return <Redirect to="/" />}} />
          </Switch>
        </Router>
      </div>
    );
  };
};

ReactDOM.render (
  <App/>,
  document.getElementById('app')
)

if (module.hot) {
	module.hot.accept();
}

export default App;

// <div className="loaderSmall">
//   <img className="loadingImg" src={loadImg}/>
// </div>
