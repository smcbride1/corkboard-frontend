import React, { Component } from 'react';
import Button from './Button.js';
import './ProfileNav.css';

export default class ProfileNav extends Component {
    render() {
        return (
            <>
                <div className="profile-nav">
                    <h2 className="profile-username">{this.props.user.name}</h2>
                    <Button onClickEvent={this.props.handleLogOut} text="Log Out"/>
                </div>
            </>
        );
    }
}