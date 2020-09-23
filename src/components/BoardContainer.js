import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoardList from './BoardList.js'
import * as actions from '../actions.js'

export class BoardContainer extends Component {
    handleClickBoardButton = (event) => {
        window.location = `../boards/${parseInt(event.target.id.split("board-list-item-")[1])}`
        //this.props.setCurrentBoard(parseInt(event.target.id.split("board-list-item-")[1]))
        this.toggleCollapse();
    }
    
    handleOnClickDelete = (event) => {
        let id = parseInt(event.target.id.split("board-list-item-")[1]);
        let board = this.props.boards.find(board => board.id === id);
        this.props.destroyBoard(board);
        this.props.onDelete(id, board);
    }

    componentDidMount() {
        this.props.fetchBoards(this.props.userId);
    }

    render() {
        return (
            <BoardList boards={this.props.boards} handleClickBoardButton={this.handleClickBoardButton} handleOnClickDelete={this.handleOnClickDelete}/>
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
        fetchBoards: (userId) => dispatch(actions.fetchBoards(userId)),
        destroyBoard: (userId) => dispatch(actions.destroyBoard(userId))
    };
};
   
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardContainer);