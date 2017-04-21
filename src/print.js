import React, { Component } from 'react';
import Menu from './components/menu';

// Create Component
class Print extends React.Component {
    render() {
        return (
            <div class="wrapper">
                <Menu />
                <h2>Välkommen till </h2>
            </div>
        )
    }

    // Lifecycle funcitons
    componentWillMount() {
        console.log('componentWillMound');
    }

    // Gets called AFTER render method
    componentDidMount() {
        console.log('componentDidMound');
        // any grabbing of external data
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
}

export default Print;
