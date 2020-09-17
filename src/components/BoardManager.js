import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BoardManager.css';
import Button from './Button.js';
import * as actions from '../actions.js'

export class BoardManager extends Component {
    constructor() {
        super();
    }

    handleClickBoardButton = (event) => {
        this.props.setCurrentBoard(parseInt(event.target.id.split("board-list-item-")[1]))
    }

    componentDidMount() {
        this.props.getBoards(this.props.user.id);
    }

    render() {
        return (
            <>
                <div id="board-manager">
                    <Button onClickEvent={this.handleClickNoteButton} text="New Board"/>
                    <h2>Boards</h2>
                    <div id="board-list">
                        {this.props.boards.map(board => 
                            <Button onClickEvent={this.handleClickBoardButton} text={board.name} key={board.id} id={`board-list-item-${board.id}`}/>
                        )}
                    </div>
                    {/* {this.setCurrentBoard ? <Board>} */}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        boards: state.board.boards,
        user: state.user
    };
};
   
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setCurrentBoard: (id) => dispatch(actions.setCurrentBoard(id)),
        getBoards: (userId) => dispatch(actions.getBoards(userId))
    };
};
   
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardManager);