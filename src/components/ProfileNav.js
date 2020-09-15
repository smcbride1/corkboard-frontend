import React, { Component } from 'react';
import Button from './Button.js';

export default class ProfileNav extends Component {
    handleOnClick = (event) => {
        fetch('http://localhost:4000/logout', {
        method: 'POST', // or 'PUT'
        })
        .then(response => response.json())
        .then(data => {
        this.props.setUser(null);
        this.props.setLoggedIn(false);
        if (data.error) {
            this.setState({error: true});
            this.setState({errorMessage: data.message});
        }
        });
        event.preventDefault();
    }

    render() {
        return (
            <>
                <h2>
                    {this.props.user.name}
                    <Button onClick={this.handleOnClick}>
                        Log Out
                    </Button>
                </h2>
            </>
        );
    }
}