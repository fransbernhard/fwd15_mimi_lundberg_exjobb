import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Scrollchor from 'react-scrollchor';

//Menu component renders menu Link
class MenuB extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Scrollchor to="#top" animate={{offset: 20, duration: 800}}>Home</Scrollchor></li>
            <li><Scrollchor to="#about" animate={{offset: 0, duration: 800}}>About</Scrollchor></li>
            <li><Link to={'/archive'}>Archive</Link></li>
            <li className="contactMobile"><a href="mailto:magdamargaretha@gmail.com?Subject=magdenmagden">Contact</a></li>
            <li className="contactWeb"><Scrollchor to="#contact" animate={{offset: 20, duration: 800}}>Contact</Scrollchor></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default MenuB;
