import React, { Component } from 'react';
import Button from './Button.js';
import './ProfileNav.css';

export default class ProfileNav extends Component {
    render() {
        return (
            <>
                <div className="profile-nav">
                    <h2>
                        {this.props.user.name}
                        <Button onClickEvent={this.props.handleLogOut} text="Log Out"/>
                    </h2>
                </div>
            </>
        );
    }
}