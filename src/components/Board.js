import React, { Component } from 'react';
import './Board.css';
import NoteNode from './NoteNode.js';
import NewNoteButton from './NewNoteButton.js';
import Button from './Button.js';

export default class Board extends Component {
    constructor() {
        super();
        
        this.state = {
            children: []
        }
    }

    handleClickNoteButton = () => {
        this.setState((prevState, props) => ({
            children: [...prevState.children, <NoteNode/>]
        }))
    }

    render() {
        console.log("render")
        return (
            <>
                <div id="tool-bar">
                </div>
                <div id="board-canvas">
                    <NewNoteButton onClickEvent={this.handleClickNoteButton}/>
                    {this.state.children}
                </div>
            </>
        );
    }
}