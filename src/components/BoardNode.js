import React, { Component } from 'react';
import Node from './Node.js'

export default class BoardNode extends Node {
    constructor() {
        super();
        this.state = {
            boardId: 0,
            title: "Title",
            content: "Content"
        }
        this.renderReturnValue = <input type="text" value={this.state.title} onChange={this.handleTitleChange} className="node-title-input"/>
    }

    handleDoubleClick = (event) => {
        alert("test2")
    }
}