import React, { Component } from 'react';
import './BoardManager.css';
import BoardNode from './BoardNode.js';

export default class BoardManager extends Component {
    render() {
        return (
            <>
                <div className="board-manager-canvas">
                <BoardNode></BoardNode>
                </div>
            </>
        );
    }
}