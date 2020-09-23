import React, { Component } from 'react';
import BoardListItem from './BoardListItem.js';

export default class BoardList extends Component {
    render() {
        return (
                <div id="board-list">
                    {this.props.boards.map(board => 
                        <BoardListItem key={board.id} onClickEvent={this.props.handleClickBoardButton} onDeleteClickEvent={this.props.handleOnClickDelete} text={board.name} id={`board-list-item-${board.id}`}/>
                    )}
                </div>
        );
    }
}