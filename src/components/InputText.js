import React, { Component } from 'react';
import './InputText.css';

export default class InputText extends Component {
    render() {
        return (
            <input type="text" placeholder={this.props.placeholder}></input>
        );
    }
}