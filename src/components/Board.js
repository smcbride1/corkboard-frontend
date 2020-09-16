import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Board.css';
import NoteNode from './NoteNode.js';
import NewNoteButton from './NewNoteButton.js';
import Button from './Button.js';
import * as actions from '../actions.js'

export class Board extends Component {
    constructor() {
        super();
        
        this.state = {
            children: []
        }
    }

    handleClickNoteButton = () => {

        // this.setState((prevState, props) => ({
        //     children: [...prevState.children, <NoteNode/>]
        // }))
        this.props.createNote()
    }

    render() {
        console.log("render")
        return (
            <>
                <div id="tool-bar">
                </div>
                <div id="board-canvas">
                    <NewNoteButton onClickEvent={this.handleClickNoteButton}/>
                    {this.state.children}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user,
        board: state.board.boards[this.props.key]
    };
};
   
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createNote: (userId, boardId) => dispatch(actions.createNote(userId, boardId)),
        addNote: (note) => dispatch(actions.addNote(note)),
        setNoteTitle: (id, title) => dispatch(actions.setNoteTitle(id, title)),
        setNoteShortContent: (id, shortContent) => dispatch(actions.setNoteShortContent(id, shortContent)),
        setNoteLongContent: (id, longContent) => dispatch(actions.setNoteLongContent(id, longContent)),
        setNoteBoardId: (id, boardId) => dispatch(actions.setNoteBoardId(id, boardId))
    };
};
   
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);