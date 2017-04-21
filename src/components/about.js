import React, { Component } from 'react';

// Create Component
class About extends React.Component {
    render() {
        return (
            <div className="about">
                <h2>ABOUT SECTION</h2>
                <p>Etiam porta sem malesuada magna mollis euismod. </p>
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

export default About;
