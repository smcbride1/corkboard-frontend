import React, { Component } from 'react';
import './InputTextNode.css';

export default class InputTextNode extends Component {
    render() {
        return (
            <>
                {this.props.type === "title" ? 
                    <input type="text" placeholder={this.props.placeholder} className="title-text-input" value={this.props.value}></input> 
                    : 
                    <input type="text" placeholder={this.props.placeholder} className="content-text-input" value={this.props.value}></input>
                }
            </>
        );
    }
}