import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
    render() {
        return (
            <>
                {this.props.type === "link" ? 
                    <a href={this.props.path}>
                        <button>
                            {this.props.text}
                        </button>
                    </a> 
                    : 
                    <button onClick={this.props.onClickEvent} key={this.props.key} id={this.props.id}>
                        {this.props.text}
                    </button>
                }
            </>
        );
    }
}