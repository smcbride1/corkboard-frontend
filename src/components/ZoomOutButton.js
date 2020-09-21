import React, { Component } from 'react';
import './ZoomOutButton.css';
import SubtractIcon from '../SubtractIcon.svg'

export default class ZoomOutButton extends Component {
    render() {
        return (
            <button id="zoom-out-button" onClick={this.props.onClickEvent}>
                <img src={SubtractIcon}/>
            </button>
        );
    }
}