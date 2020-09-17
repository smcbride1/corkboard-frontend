import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BoardManager.css';
import Board from './Board.js';
import Button from './Button.js';
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
        this.props.setCurrentBoard(parseInt(event.target.id.split("board-list-item-")[1]))
        this.toggleCollapse();
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
                                <Button onClickEvent={this.handleClickBoardButton} text={board.name} key={board.id} id={`board-list-item-${board.id}`}/>
                            )}
                        </div>
                </div>
                {this.props.currentBoard ? <Board id={`board-${this.props.currentBoard}`}/> : <div class="wrapper"><h2>Select a Board</h2></div>}
            </>
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
        fetchBoards: (userId) => dispatch(actions.fetchBoards(userId))
    };
};
   
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardManager);