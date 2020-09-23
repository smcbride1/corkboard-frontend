import React, { Component } from 'react';
import './BoardListItem.css';

export default class BoardListItem extends Component {
    truncate(str, maxLen) {
        if (str.length > maxLen) {
            return `${this.props.text.slice(0, (maxLen))}...`;
        } else {
            return str;
        }
    }
    
    render() {
        return (
            <>
                <button onClick={this.props.onClickEvent} id={this.props.id}>
                    {this.truncate(this.props.text, 10)}
                </button>
                <button className="delete-item-button" onClick={this.props.onDeleteClickEvent} id={this.props.id}>x</button>
                {/* <button onClick={this.props.onDeleteClickEvent} id={this.props.id}>
                    X
                </button> */}
            </>
        );
    }
}