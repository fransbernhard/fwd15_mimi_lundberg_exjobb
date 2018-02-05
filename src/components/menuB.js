import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Scrollchor from 'react-scrollchor';
import { HashLink as Link } from 'react-router-hash-link';

//Menu component renders menu Link
class MenuB extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><Link to="/archive#archive">Archive</Link></li>
            <li className="contactMobile"><a href="mailto:magdamargaretha@gmail.com?Subject=magdenmagden">Contact</a></li>
            <li className="contactWeb"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default MenuB;

// <li><Scrollchor to="#home" animate={{offset: 20, duration: 800}}>Home</Scrollchor></li>
// <li><Scrollchor to="#about" animate={{offset: 0, duration: 800}}>About</Scrollchor></li>
// <li><Link to={'/archive'}>Archive</Link></li>
// <li className="contactMobile"><a href="mailto:magdamargaretha@gmail.com?Subject=magdenmagden">Contact</a></li>
// <li className="contactWeb"><Scrollchor to="#contact" animate={{offset: 20, duration: 800}}>Contact</Scrollchor></li>
