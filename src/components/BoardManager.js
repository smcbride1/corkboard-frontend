import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import './BoardManager.css';
import Board from './Board.js';
import Button from './Button.js';
import BoardListItem from './BoardListItem.js';
import ToggleBoardManagerButton from './ToggleBoardManagerButton.js'
import * as actions from '../actions.js'

export class BoardManager extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: false
        };
    }

    handleClickBoardButton = (event) => {
        window.location = `../boards/${parseInt(event.target.id.split("board-list-item-")[1])}`
        //this.props.setCurrentBoard(parseInt(event.target.id.split("board-list-item-")[1]))
        this.toggleCollapse();
    }

    handleOnClickDelete = (event) => {
        let id = parseInt(event.target.id.split("board-list-item-")[1]);
        let board = this.props.boards.find(board => board.id === id);
        this.props.destroyBoard(board);
        console.log(`ID: ${id}, PARAMS_ID: ${parseInt(this.props.match.params.boardId)}, ${id === parseInt(this.props.match.params.boardId)}`)
        if (id === parseInt(this.props.match.params.boardId)) {
            console.log("Redirect")
            window.location = `../boards`;
        } else {
            this.props.removeBoard(board);
        }
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

    componentDidMount() {
        if (this.props.match.params.boardId) {
            this.toggleCollapse()
        }
        this.props.fetchBoards(this.props.user.id);
    }

    render() {
        return (
            <>
                <ToggleBoardManagerButton onClickEvent={this.toggleCollapse}/>
                <div id="board-manager">
                    <Button onClickEvent={this.handleClickNoteButton} text="New Board"/>
                    <h2>Boards</h2>
                    <div id="board-list">
                        {this.props.boards.map(board => 
                            <BoardListItem key={board.id} onClickEvent={this.handleClickBoardButton} onDeleteClickEvent={this.handleOnClickDelete} text={board.name} id={`board-list-item-${board.id}`}/>
                        )}
                    </div>
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