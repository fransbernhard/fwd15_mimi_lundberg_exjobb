import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Scrollchor from 'react-scrollchor';

// <nav>
//   <ul>
//     <li><Link to={'/#top'}>Home</Link></li>
//     <li><Link to={'/#about'}>About</Link></li>
//     <li><Link to={'/archive'}>Archive</Link></li>
//     <li className="contactMobile"><a href="mailto:magdamargaretha@gmail.com?Subject=magdenmagden">Contact</a></li>
//     <li className="contactWeb"><Link to={'/#contact'}>Contact</Link></li>
//   </ul>
// </nav>

// <li><Scrollchor to="#about" animate={{offset: -200, duration: 600}}><Link to={'/#about'}>About</Link></Scrollchor></li>


//Menu component renders menu Links
class Menu extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Scrollchor to="#top" animate={{offset: 20, duration: 600}}><Link to={'/#top'}>Home</Link></Scrollchor></li>
            <li><Scrollchor to="#about" animate={{offset: -200, duration: 600}}><Link to={'/#about'}>About</Link></Scrollchor></li>
            <li><Link to={'/archive'}>Archive</Link></li>
            <li className="contactMobile"><a href="mailto:magdamargaretha@gmail.com?Subject=magdenmagden">Contact</a></li>
            <li className="contactWeb"><Scrollchor to="#contact" animate={{offset: 20, duration: 600}}><Link to={'/#contact'}>Contact</Link></Scrollchor></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Menu;
