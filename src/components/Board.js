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

        this.editFinishTimeout = null;
        this.editFinishTimeoutValue = 1000;
    }

    handleClickCreateNoteButton = () => {
        this.props.createNote(this.props.board.id)
    }

    componentDidMount() {
        this.props.fetchNotes(this.props.board.id);
    }

    finishEditSaveCheck = () => {
        console.log("check2");
        clearInterval(this.editFinishTimeout);
        this.editFinishTimeout = setTimeout(() => {this.props.updateNote(this.props.selectedNote)}, this.editFinishTimeoutValue);
    }

    handleTitleChange = (event) => {
        event.persist();
        this.props.setNoteTitle(this.props.selectedNoteId, event.target.value);
        this.finishEditSaveCheck();
    }

    handleLongContentChange = (event) => {
        event.persist();
        this.props.setNoteLongContent(this.props.selectedNoteId, event.target.value);
        this.finishEditSaveCheck();
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
                    {this.props.selectedNoteId ? <div id="expanded-content">
                        <input type="text" value={this.props.selectedNote.title} onChange={this.handleTitleChange} className="node-title-input"/>
                        <br/>
                        <hr/>
                        <br/>
                        <textarea value={this.props.selectedNote.long_content} onChange={this.handleLongContentChange} className="node-long-content-area"/>
                    </div>
                    :
                    ""}
                    <div class="background-click-capture" onClick={this.props.unselectNote}></div>
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
        board: state.board.boards.find(board => board.id === id),
        selectedNoteId: state.note.selectedNote,
        selectedNote: state.note.notes.find(note => note.id === state.note.selectedNote)
    };
};
   
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createNote: (userId, boardId) => dispatch(actions.createNote(userId, boardId)),
        addNote: (note) => dispatch(actions.addNote(note)),
        fetchNotes: (boardId) => dispatch(actions.fetchNotes(boardId)),
        setNoteTitle: (id, title) => dispatch(actions.setNoteTitle(id, title)),
        setNoteLongContent: (id, longContent) => dispatch(actions.setNoteLongContent(id, longContent)),
        updateNote: (note) => dispatch(actions.updateNote(note)),
        unselectNote: () => dispatch(actions.unselectNote())
    };
};
   
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);