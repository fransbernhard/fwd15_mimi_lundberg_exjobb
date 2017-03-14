import React, { Component } from 'react';
import Menu from './components/menu';

// Create Component
class Paint extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <h2>All about me</h2>
            </div>
        )
    };
}

export default Paint;
