import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
// import { HashLink } from 'react-router-hash-link';


//Create AddItem component
class Menu extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/#about'}>About</Link></li>
            <li><Link to={'/archive'}>Archive</Link></li>
            <li className="contactMobile"><a href="mailto:magdamargaretha@gmail.com?Subject=magdenmagden">Contact</a></li>
            <li className="contactWeb"><Link to={'/#contact'}>Contact</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Menu;
