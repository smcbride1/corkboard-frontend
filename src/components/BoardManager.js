import React, { Component } from 'react';
import './BoardManager.css';
import BoardNode from './BoardNode.js';
import NewNodeButton from './NewNodeButton.js';

export default class BoardManager extends Component {
    constructor() {
        super();
        
        this.state = {
            children: []
        }
    }

    handleClick = () => {
        this.setState((prevState, props) => ({
            children: [...prevState.children, <BoardNode/>]
        }))
    }

    render() {
        console.log("render")
        return (
            <>
                <div id="board-manager-canvas">
                    <NewNodeButton onClickEvent={this.handleClick}></NewNodeButton>
                    {this.state.children}
                </div>
            </>
        );
    }
}