import React, { Component } from 'react';
import './BoardListItem.css';

export default class BoardListItem extends Component {
    render() {
        return (
            <>
                <button onClick={this.props.onClickEvent} id={this.props.id}>
                    {this.props.text}
                </button>
                <button onClick={this.props.onDeleteClickEvent} id={this.props.id}>
                    X
                </button>
            </>
        );
    }
}