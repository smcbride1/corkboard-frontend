import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import './BoardManager.css';
import Board from './Board.js';
import Button from './Button.js';
import BoardContainer from './BoardContainer.js';
//import BoardListItem from './BoardListItem.js';
import ToggleBoardManagerButton from './ToggleBoardManagerButton.js'
import * as actions from '../actions.js'

export class BoardManager extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: false
        };
    }

    handleClickNoteButton = (event) => {
        this.props.createBoard(this.props.user.id);
    }

    toggleCollapse = () => {
        this.setState((prevState) => ({collapsed: !prevState.collapsed}))
        if (!this.state.collapsed) {
            document.getElementById("board-manager").style.visibility = "hidden";
            document.getElementById("toggle-board-manager-button").style.left = "0px";
        } else {
            document.getElementById("board-manager").style.visibility = "visible";
            document.getElementById("toggle-board-manager-button").style.left = "300px";
        }
    }

    deleteCurrentRedirectCheck = (id, board) => {
        console.log(`ID: ${id}, PARAMS_ID: ${parseInt(this.props.match.params.boardId)}, ${id === parseInt(this.props.match.params.boardId)}`)
        if (id === parseInt(this.props.match.params.boardId)) {
            console.log("Redirect")
            window.location = `../boards`;
        } else {
            this.props.removeBoard(board);
        }
    }

    componentDidMount() {
        if (this.props.match.params.boardId) {
            this.toggleCollapse()
        }
    }

    render() {
        return (
            <>
                <ToggleBoardManagerButton onClickEvent={this.toggleCollapse}/>
                <div id="board-manager">
                    <Button onClickEvent={this.handleClickNoteButton} text="New Board"/>
                    <h2>Boards</h2>
                    <BoardContainer userId={this.props.user.id} onDelete={this.deleteCurrentRedirectCheck}/>
                </div>
                {this.props.match.params.boardId && this.props.boards.length !== 0 ? <Board id={parseInt(this.props.match.params.boardId)}/> : <div className="wrapper"><h2>Select a Board</h2></div>}
            </>
            //Only return board component if board id param exists and boards have finished being fetched
            //(this is important because board component needs to access boards array in state)
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        boards: state.board.boards,
        currentBoard: state.board.currentBoard,
        user: state.user
    };
};
   
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setCurrentBoard: (id) => dispatch(actions.setCurrentBoard(id)),
        fetchBoards: (userId) => dispatch(actions.fetchBoards(userId)),
        createBoard: (userId) => dispatch(actions.createBoard(userId)),
        destroyBoard: (id) => dispatch(actions.destroyBoard(id)),
        removeBoard: (id) => dispatch(actions.removeBoard(id))
    };
};
   
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardManager);