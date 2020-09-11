import React, { Component } from 'react';
import './Button.css';

export default class NavBar extends Component {
    render() {
        return (
            <a href={this.props.path}>
                <button>
                    {this.props.text}
                </button>
            </a>
        );
    }
}