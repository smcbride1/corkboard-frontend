import React, { Component } from 'react';
import './NavBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <nav>
                <ul className="nav_links">
                    <li><a href="boards">My Boards</a></li>
                    <li><a href="walls">My Walls</a></li>
                    <li><a href="rooms">My Rooms</a></li>
                </ul>
            </nav>
        );
    }
}