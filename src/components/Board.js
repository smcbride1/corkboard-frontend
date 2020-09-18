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
        this.props.createNote(this.props.board.id)
    }

    componentDidMount() {
        this.props.fetchNotes(this.props.board.id);
    }

    render() {
        return (
            <>
                <div id="board-canvas">
                    <NewNoteButton onClickEvent={this.handleClickCreateNoteButton}/>
                    <div className="wrapper">
                        {this.props.updatingNote ? <p className="save-text">Saving...</p> : <p className="save-text">Saved</p>}
                    </div>
                    {this.props.notes.map(note => <NoteNode id={`note-${note.id}`}/>)}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = parseInt(ownProps.id.split("board-")[1]);
    return {
        user: state.user,
        notes: state.note.notes,
        updatingNote: state.note.updatingNote,
        board: state.board.boards.find(board => board.id === id)
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