"use strict";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import './scss/app.scss';
import './dummydata';
// import { HashLink as Link } from 'react-router-hash-link';

// Module requires
import Menu from './components/menu';
import Archive from './archive';
import About from './components/about';
import Contact from './components/contact';

// return routes
class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={'/'} component={Home} />
                <Route path={'/archive'} component={Archive} />
            </Router>
        )
    }
}

var Home = React.createClass({
    render: function(){

      return(
        <div>
            <Menu />
            <div className="container">
                <div className="hero-bckgound"></div>
                <About />
                <Contact />
            </div>
        </div>
      )
    },

    // Lifecycle funcitons
    // This function gets called just before the component mounts the DOM
    // rendering
    componentWillMount: function(){
        console.log('componentWillMound');
    },

    // Gets called AFTER render method
    componentDidMount: function(){
        console.log('componentDidMound');
        // any grabbing of external data
    },

    componentWillUpdate: function(){
        console.log('componentWillUpdate');
        // any grabbing of external data
    }
});


ReactDOM.render (
    <App />,
    document.getElementById('app')
)

// Hot module reloader (injecting code)
if(DEVELOPMENT){
		if (module.hot) {
				module.hot.accept();
		}
}
