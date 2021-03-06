import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NoteNode.css'
import * as actions from '../actions.js';

class NoteNode extends Component {
    constructor() {
        super();
        // this.state = {
        //     boardId: 0,
        //     title: "Title",
        //     content: "Content"
        // }
        
        this.state = {
            typing: false,
        }

        this.mouseTarget = null;
        this.offsetAdjustmentX = 10;
        this.offsetAdjustmentY = 80;
        this.editFinishTimeout = null;
        this.editFinishTimeoutValue = 1000;
    }
    
    componentDidMount() {
        this.noteElement = document.getElementById(`note-${this.props.note.id}`);
    }

    handleMouseDown = (event) => {
        event.persist();
        if (event.target.className === "drag-top-bar") {
            this.mouseTarget = event.target.parentElement;
            this.offsetAdjustmentX = event.clientX - this.noteElement.style.left.split("px")[0];
            this.offsetAdjustmentY = event.clientY - this.noteElement.style.top.split("px")[0];
        }
    }

    handleMouseUp = () => {
        if (this.mouseTarget) {
            this.props.setNoteXOffset(this.noteElement.style.left.split("px")[0]);
            this.props.setNoteYOffset(this.noteElement.style.top.split("px")[0]);
            this.finishEditSaveCheck();
        }
        this.mouseTarget = null;
    }

    handleMouseMove = (event) => {
        if (this.mouseTarget) {
            this.mouseTarget.style["left"] = `${event.clientX - this.offsetAdjustmentX}px`;
            this.mouseTarget.style["top"] = `${event.clientY - this.offsetAdjustmentY}px`;
        }
    }
    
    handleDoubleClick = (event) => {
        this.props.setSelectedNote(this.props.note.id);
    }

    finishEditSaveCheck = () => {
        console.log("check");
        clearInterval(this.editFinishTimeout);
        this.editFinishTimeout = setTimeout(() => {this.props.updateNote(this.props.note)}, this.editFinishTimeoutValue);
    }

    handleTitleChange = (event) => {
        event.persist();
        this.props.setNoteTitle(event.target.value);
        this.finishEditSaveCheck();
    }

    handleShortContentChange = (event) => {
        event.persist();
        this.props.setNoteShortContent(event.target.value);
        this.finishEditSaveCheck();
    }

    handleOnClickDelete = (event) => {
        let confirm = window.confirm(`Are you sure you want to delete note '${this.props.note.title}'?`)
        if (confirm) {
            if (this.props.selectedNote === this.props.note.id) {
                this.props.unselectNote();
            }
            this.props.destroyNote(this.props.note);
            this.props.removeNote(this.props.note);
        }
    }

    handleOnClickExpandContent = (event) => {
        this.props.expandContent(this.props.note);
    }
    
    render() {
        document.addEventListener("mouseup", this.handleMouseUp);
        document.addEventListener("mousemove", this.handleMouseMove);
        return (
            <div className="note-node" id={`note-${this.props.note.id}`} onDoubleClick={ this.handleDoubleClick } style={{left: this.props.note.x_offset, top: this.props.note.y_offset}}>
            <button className="drag-top-bar" onMouseDown={ this.handleMouseDown }></button>
            <button className="delete-button" onClick={this.handleOnClickDelete}>x</button>
            <input type="text" value={this.props.note.title} onChange={this.handleTitleChange} className="node-title-input"/>
            <br/>
            <hr/>
            <br/>
            <textarea value={this.props.note.short_content} onChange={this.handleShortContentChange} className="node-short-content-area"/>
        </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = parseInt(ownProps.id.split("note-")[1]);

    //For some reason, adding the `notes` key and setting the value to `state.note.notes` helped
    //fix render not being called when note.title was being updated. Maybe it has to do with 
    //`note` having a value that is dependent on .find?
    return {
        note: state.note.notes.find(note => note.id === id),
        notes: state.note.notes,
        selectedNote: state.note.selectedNote
    };
};
   
const mapDispatchToProps = (dispatch, ownProps) => {
    let noteId = parseInt(ownProps.id.split("note-")[1]);

    return {
        setNoteTitle: (title) => dispatch(actions.setNoteTitle(noteId, title)),
        setNoteShortContent: (shortContent) => dispatch(actions.setNoteShortContent(noteId, shortContent)),
        setNoteLongContent: (longContent) => dispatch(actions.setNoteLongContent(noteId, longContent)),
        setNoteBoardId: (boardId) => dispatch(actions.setNoteBoardId(noteId, boardId)),
        setNoteXOffset: (xOffset) => dispatch(actions.setNoteXOffset(noteId, xOffset)),
        setNoteYOffset: (yOffset) => dispatch(actions.setNoteYOffset(noteId, yOffset)),
        updateNote: (note) => dispatch(actions.updateNote(note)),
        destroyNote: (note) => dispatch(actions.destroyNote(note)),
        removeNote: (note) => dispatch(actions.removeNote(note)),
        setSelectedNote: (id) => dispatch(actions.setSelectedNote(id)),
        unselectNote: () => dispatch(actions.unselectNote())
    };
};
   
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteNode);