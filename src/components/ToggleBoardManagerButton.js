import React, { Component } from 'react';
import './ToggleBoardManagerButton.css';
import HamburgerIcon from '../HamburgerIcon.svg'

export default class ToggleBoardManagerButton extends Component {
    render() {
        return (
            <button id="toggle-board-manager-button" onClick={this.props.onClickEvent}>
                <img src={HamburgerIcon}/>
            </button>
        );
    }
}