import React, { Component } from 'react';
import Menu from './components/menu';
import './dummydata';

// Create Component
class Archive extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="container">
                    <div className="wrapper">
                        <h2>This is archive</h2>
                        <p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.</p>
                    </div>
                </div>
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

export default Archive;
