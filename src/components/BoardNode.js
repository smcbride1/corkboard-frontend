import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './BoardNode.css';
import InputTextNode from './InputTextNode.js';

export default class BoardNode extends Component {
    constructor() {
        super();
        this.mouseEvent = null;
        this.state = {
            boardId: 0,
            title: "Title",
            content: "Content"
        }
    }

    componentDidMount() {
    }
    
    handleMouseDown = (event) => {
        event.persist();
        this.mouseEvent = event;
        console.log()
    }

    handleMouseUp = (event) => {
        this.mouseEvent = null;
    }

    handleMouseMove = (event) => {
        if (this.mouseEvent) {
            this.mouseEvent.target.style["left"] = `${event.pageX - 10}px`;
            this.mouseEvent.target.style["top"] = `${event.pageY - 10}px`;
        }
    }

    handleMouseOver = (event) => {
        //event.target.style["opacity"] = 0.5;
    }

    handleMouseLeave = (event) => {
        //event.target.style["opacity"] = 1;
    }

    handleEditClick = () => {
        this.setState((prevState, props) => ({...prevState, editMode: !prevState.editMode}))
    }

    handleTitleChange = (event) => {
        event.persist()
        this.setState((prevState, props) => ({...prevState, title: event.target.value}))
        event.target.style["size"] = event.target.value.length;
    }

    handleContentChange = (event) => {
        event.persist()
        this.setState((prevState, props) => ({...prevState, content: event.target.value}))
    }

    handleDoubleClick = (event) => {
        alert("test")
    }

    render() {
        document.addEventListener("mouseup", this.handleMouseUp)
        return (
            <>
                <div className="board-node" 
                    onDoubleClick={ this.handleDoubleClick }
                    onMouseDown={ this.handleMouseDown } 
                    onMouseMove={ this.handleMouseMove } 
                    onMouseOver={ this.handleMouseOver} 
                    onMouseLeave={ this.handleMouseLeave }>
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