import React, { Component } from 'react';
import './NewBoardButton.css';

export default class NewBoardButton extends Component {
    render() {
        return (
            <button class="new-node-button" onClick={this.props.onClickEvent}>
                +
            </button>
        );
    }
}