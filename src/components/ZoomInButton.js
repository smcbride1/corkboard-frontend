import React, { Component } from 'react';
import './ZoomInButton.css';
import AddIcon from '../AddIcon.svg'

export default class ZoomInButton extends Component {
    render() {
        return (
            <button id="zoom-in-button" onClick={this.props.onClickEvent}>
                <img src={AddIcon}/>
            </button>
        );
    }
}