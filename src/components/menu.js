import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

//Create AddItem component
class Menu extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/paint'}>Paint</Link>
                        </li>
                        <li>
                            <Link to={'/magda'}>Magda</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }

}

export default Menu;
