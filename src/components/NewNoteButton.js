import React, { Component } from 'react';
import './NewNoteButton.css';
import AddIcon from '../AddIcon.svg'

export default class NewNoteButton extends Component {
    render() {
        return (
            <button id="new-node-button" onClick={this.props.onClickEvent}>
                <img src={AddIcon}/>
            </button>
        );
    }
}