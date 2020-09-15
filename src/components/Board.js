import React, { Component } from 'react';
import './Board.css';
import NoteNode from './NoteNode.js';
import NewNoteButton from './NewBoardButton.js';
import Button from './Button.js';

export default class Board extends Component {
    constructor() {
        super();
        
        this.state = {
            children: []
        }
    }

    handleClickBoardButton = () => {
        this.setState((prevState, props) => ({
            children: [...prevState.children, <BoardNode/>]
        }))
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
                    <NewNoteButton/>
                </div>
                <div id="board-canvas">
                    {this.state.children}
                </div>
            </>
        );
    }
}