import React, { Component } from 'react';
import Menu from './components/menu';
import json from './data.json';


// Create Component
class Archive extends React.Component {
  constructor(){
    super();
    this.state = {
      data: []
    };
  };

  render() {
    return (
      <div>
        <Menu />
        <div className="archive-container">
          <div className="archive-wrapper">
            <ul className="filterList">
              <li>paintings</li>
              <li>pints</li>
              <li>places</li>
              <li>social</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  // Lifecycle funcitons
  componentWillMount() {
      console.log('componentWillMound');
  }

  // Gets called AFTER render method
  componentDidMount() {
    // any grabbing of external data
    fetch("./data.json")
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      this.setState({
        data: json
      });
    });
    console.log('componentDidMount  ' + this.state.data[json]);
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
};

export default Archive;
