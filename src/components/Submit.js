import React, { Component } from 'react';
import './Button.css';

export default class Submit extends Component {
    render() {
        return (
            <>
                <input type="submit" value={this.props.value}></input>
            </>
        );
    }
}