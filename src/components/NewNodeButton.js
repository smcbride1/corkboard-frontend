import React, { Component } from 'react';
import './NewNodeButton.css';

export default class NewNodeButton extends Component {
    render() {
        return (
            <button class="new-node-button" onClick={this.props.onClickEvent}>
                +
            </button>
        );
    }
}