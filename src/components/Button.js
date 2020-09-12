import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
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