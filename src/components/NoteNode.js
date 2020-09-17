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

        this.mouseEvent = null;
        this.offsetAdjustmentX = 10;
        this.offsetAdjustmentY = 80;
        this.editFinishTimeout = null;
        this.editFinishTimeoutValue = 5000;
    }
    
    componentDidMount() {
    }

    handleMouseDown = (event) => {
        event.persist();
        this.mouseEvent = event;
    }

    handleMouseUp = () => {
        if (this.mouseEvent) {
            let thisNote = document.getElementById(`note-${this.props.note.id}`);
            this.props.setNoteXOffset(thisNote.style.left.split("px")[0]);
            this.props.setNoteYOffset(thisNote.style.top.split("px")[0]);
            this.finishEditSaveCheck();
        }
        this.mouseEvent = null;
    }

    handleMouseMove = (event) => {
        if (this.mouseEvent) {
            this.mouseEvent.target.style["left"] = `${event.clientX - this.offsetAdjustmentX}px`;
            this.mouseEvent.target.style["top"] = `${event.clientY - this.offsetAdjustmentY}px`;
        }
    }
    
    handleDoubleClick = (event) => {
        alert("test2")
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
    
    render() {
        document.addEventListener("mouseup", this.handleMouseUp);
        document.addEventListener("mousemove", this.handleMouseMove);
        return (
            <>

                <div className="note-node" id={`note-${this.props.note.id}`} onMouseDown={ this.handleMouseDown } onDoubleClick={ this.handleDoubleClick } style={{left: this.props.note.x_offset, top: this.props.note.y_offset}}>
                    <input type="text" value={this.props.note.title} onChange={this.handleTitleChange} className="node-title-input"/>
                    <br/>
                    <hr/>
                    <br/>
                    <textarea value={this.props.note.short_content} onChange={this.handleShortContentChange} className="node-short-content-area"/>
                </div>
            </>
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
        notes: state.note.notes
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
    };
};
   
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteNode);