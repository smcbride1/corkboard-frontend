import React, { Component } from 'react';
import './Node.css';

export default class Node extends Component {
    constructor() {
        super();
        this.mouseEvent = null;
    }

    componentDidMount() {
    }
    
    handleMouseDown = (event) => {
        event.persist();
        this.mouseEvent = event;
    }

    handleMouseUp = () => {
        this.mouseEvent = null;
    }

    handleMouseMove = (event) => {
        if (this.mouseEvent) {
            this.mouseEvent.target.style["left"] = `${event.pageX - 10}px`;
            this.mouseEvent.target.style["top"] = `${event.pageY - 10}px`;
        }
    }

    handleDoubleClick = (event) => {
        alert("test")
    }

    handleTitleChange = (event) => {
        event.persist()
        this.setState((prevState, props) => ({...prevState, title: event.target.value}))
    }

    handleContentChange = (event) => {
        event.persist()
        this.setState((prevState, props) => ({...prevState, content: event.target.value}))
    }

    render() {
        document.addEventListener("mouseup", this.handleMouseUp)
        document.addEventListener("mousemove", this.handleMouseMove)
        return (
            <>
                <div className="board-node" 
                    onMouseDown={ this.handleMouseDown } 
                    onDoubleClick={ this.handleDoubleClick }>
                    <input type="text" value={this.state.title} onChange={this.handleTitleChange} className="node-title-input"/>
                    <br/>
                    <hr/>
                    <br/>
                    <textarea value={this.state.content} onChange={this.handleContentChange} className="node-title-area"/>
                </div>
            </>
        );
    }
}