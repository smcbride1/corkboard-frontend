import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './BoardNode.css';

export default class BoardNode extends Component {
    constructor() {
        super();
        this.mouseEvent = null;
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
            this.mouseEvent.target.style["left"] = `${event.pageX - 90}px`;
            this.mouseEvent.target.style["top"] = `${event.pageY - 10}px`;
        }
    }

    handleMouseOver = (event) => {
        event.target.style["opacity"] = 0.5;
    }

    handleMouseLeave = (event) => {
        event.target.style["opacity"] = 1;
    }

    render() {
        document.addEventListener("mouseup", this.handleMouseUp)
        return (
            <>
                <div className="board-node" 
                onMouseDown={ this.handleMouseDown } 
                onMouseMove={ this.handleMouseMove } 
                onMouseOver={ this.handleMouseOver} 
                onMouseLeave={ this.handleMouseLeave }>
                    <h1>Test Title</h1>
                </div>
            </>
        );
    }
}