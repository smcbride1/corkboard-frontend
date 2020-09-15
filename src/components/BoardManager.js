import React, { Component } from 'react';
import './BoardManager.css';
import Button from './Button.js';

export default class Board extends Component {
    constructor() {
        super();
        
        this.state = {
            boards: []
        }
    }

    handleClickBoardButton = () => {
        this.setState((prevState, props) => ({
            boards: [...prevState.boards, <BoardNode/>]
        }))
    }

    render() {
        console.log("render")
        return (
            <>
                <Button onClickEvent={this.handleClickNoteButton} text="New Board"/>
                <div id="board-list">
                    {this.state.boards}
                </div>
            </>
        );
    }
}