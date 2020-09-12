import React, { Component } from 'react';
import './BoardManager.css';
import BoardNode from './BoardNode.js';
import NoteNode from './NoteNode.js';
import NewBoardButton from './NewBoardButton.js';
import NewNoteButton from './NewBoardButton.js';
import Button from './Button.js';

export default class BoardManager extends Component {
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
                    <Button onClickEvent={this.handleClickBoardButton} text="New Board"/>
                    <Button onClickEvent={this.handleClickNoteButton} text="New Note"/>
                </div>
                <div id="board-manager-canvas">
                    {this.state.children}
                </div>
            </>
        );
    }
}