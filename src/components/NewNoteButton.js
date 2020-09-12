import React, { Component } from 'react';
import './NewNoteButton.css';

export default class NewNoteButton extends Component {
    render() {
        return (
            <button class="new-node-button" onClick={this.props.onClickEvent}>
                +
            </button>
        );
    }
}