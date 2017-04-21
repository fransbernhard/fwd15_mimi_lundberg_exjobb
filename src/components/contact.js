import React, { Component } from 'react';

// Create Component
class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <h2>CONTACT</h2>
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

export default Contact;
