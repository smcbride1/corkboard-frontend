import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Board.css';
import NoteNode from './NoteNode.js';
import NewNoteButton from './NewNoteButton.js';
import Button from './Button.js';
import * as actions from '../actions.js'
import ZoomInButton from './ZoomInButton';
import ZoomOutButton from './ZoomOutButton';

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
        this.props.fetchNotes(this.props.id);
    }

    finishEditSaveCheck = () => {
        console.log("check2");
        clearInterval(this.editFinishTimeout);
        this.editFinishTimeout = setTimeout(() => {this.props.updateNote(this.props.selectedNote)}, this.editFinishTimeoutValue);
    }

    finishEditSaveCheckBoard = () => {
        console.log("check3");
        clearInterval(this.editFinishTimeout);
        this.editFinishTimeout = setTimeout(() => {this.props.updateBoard(this.props.board)}, this.editFinishTimeoutValue);
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

    handleNameChange = (event) => {
        event.persist();
        this.props.setBoardName(this.props.id, event.target.value);
        this.finishEditSaveCheckBoard();
    }

    handleClickZoomInButton = () => {
        //For Chrome, Safari, IE
        document.getElementById("notes-container").style.zoom = "2"
        //For Firefox (Doesn't work correctly currently)
        document.getElementById("notes-container").style["-moz-transform"] = "scale(2)"
        document.getElementById("notes-container").style["-moz-transform-origin"] = "0 0"
    }

    handleClickZoomOutButton = () => {
        //For Chrome, Safari, IE
        document.getElementById("notes-container").style.zoom = "1"
        //For Firefox (Doesn't work correctly currently)
        document.getElementById("notes-container").style["-moz-transform"] = "scale(1)"
        document.getElementById("notes-container").style["-moz-transform-origin"] = "0 0"
    }

    render() {
        return (
            <div className="board-canvas" id={`board-${this.props.board.id}`}>
                <input type="text" className="board-name-input" value={this.props.board.name} onChange={this.handleNameChange}/>
                <NewNoteButton onClickEvent={this.handleClickCreateNoteButton}/>
                <ZoomInButton onClickEvent={this.handleClickZoomInButton}/>
                <ZoomOutButton onClickEvent={this.handleClickZoomOutButton}/>
                <div className="wrapper">
                    {this.props.updatingNote ? <p className="save-text">Saving...</p> : <p className="save-text">Saved</p>}
                </div>
                <div id="notes-container">
                    {this.props.notes.map(note => <NoteNode key={note.id} id={`note-${note.id}`}/>)}
                </div>
                {this.props.selectedNoteId ? <div id="expanded-content">
                    <input type="text" value={this.props.selectedNote.title} onChange={this.handleTitleChange} className="node-title-input"/>
                    <br/>
                    <hr/>
                    <br/>
                    <textarea value={this.props.selectedNote.long_content} onChange={this.handleLongContentChange} className="node-long-content-area"/>
                </div>
                :
                ""}
            <div className="background-click-capture" onClick={this.props.unselectNote}></div>
        </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.id;
    return {
        user: state.user,
        notes: state.note.notes,
        updatingNote: state.note.updatingNote,
        id: id,
        board: state.board.boards.find(board => board.id === id),
        //Honestly not sure why adding the below line fixed this.props.board.name not calling render when changed in the name change input
        boardName: state.board.boards.find(board => board.id === id).name,
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
        unselectNote: () => dispatch(actions.unselectNote()),
        setBoardName: (id, name) => dispatch(actions.setBoardName(id, name)),
        updateBoard: (board) => dispatch(actions.updateBoard(board))
    };
};
   
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);