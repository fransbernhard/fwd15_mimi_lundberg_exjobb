import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Scrollchor from 'react-scrollchor';

//Menu component renders menu Link
class Menu extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Scrollchor to="#top" animate={{offset: 20, duration: 800}}><Link to={'/#top'}>Home</Link></Scrollchor></li>
            <li><Scrollchor to="#about" animate={{offset: 20, duration: 800}}><Link to={'/#about'}>About</Link></Scrollchor></li>
            <li><Link to={'/archive'}>Archive</Link></li>
            <li className="contactMobile"><a href="mailto:magdamargaretha@gmail.com?Subject=magdenmagden">Contact</a></li>
            <li className="contactWeb"><Scrollchor to="#contact" animate={{offset: 20, duration: 800}}><Link to={'/#contact'}>Contact</Link></Scrollchor></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Menu;
