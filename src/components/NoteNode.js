import React, { Component } from 'react';
import Node from './Node.js'

export default class NoteNode extends Node {
    constructor() {
        super();
        this.state = {
            boardId: 0,
            title: "Title",
            content: "Content"
        }
        this.renderReturnValue =
        <>
            <input type="text" value={this.state.title} onChange={this.handleTitleChange} className="node-title-input"/>
            <br/>
            <hr/>
            <br/>
            <textarea value={this.state.content} onChange={this.handleContentChange} className="node-title-area"/>
        </>
    }
    
    handleDoubleClick = (event) => {
        alert("test2")
    }
}