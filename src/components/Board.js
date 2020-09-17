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
    }

    handleClickCreateNoteButton = () => {
        this.props.createNote()
    }

    componentDidMount() {
        console.log(`Board: ${this.props.board.id}`)
        this.props.fetchNotes(this.props.board.id);
    }

    render() {
        return (
            <>
                <div id="tool-bar">
                </div>
                <div id="board-canvas">
                    <NewNoteButton onClickEvent={this.handleClickCreateNoteButton}/>
                    {this.props.notes.map(note => <NoteNode/>)}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state, ownProps) => 
{
    return {
        user: state.user,
        notes: state.note.notes,
        board: state.board.boards.filter(board => board.id === parseInt(ownProps.id.split("board-")[1]))[0]
    };
};
   
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createNote: (userId, boardId) => dispatch(actions.createNote(userId, boardId)),
        addNote: (note) => dispatch(actions.addNote(note)),
        fetchNotes: (boardId) => dispatch(actions.fetchNotes(boardId)),
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