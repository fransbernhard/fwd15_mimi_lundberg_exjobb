"use strict";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import './scss/app.scss';
import './dummydata';

// Module requires
import Paint from './paint';
import Magda from './magda';
import TodoComponent from './components/todo';


// return routes
class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={'/'} component={TodoComponent} />
                <Route path={'/paint'} component={Paint} />
                <Route path={'/magda'} component={Magda} />
            </Router>
        )
    }
}

ReactDOM.render (
    <App />,
    document.getElementById('todo-wrapper')
)

// Hot module reloader (injecting code)
if(DEVELOPMENT){
		if (module.hot) {
				module.hot.accept();
		}
}
