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
        this.mouseEvent = null;
        this.offsetAdjustmentX = 10;
        this.offsetAdjustmentY = 80;
    }
    
    componentDidMount() {
    }

    handleMouseDown = (event) => {
        event.persist();
        this.mouseEvent = event;
    }

    handleMouseUp = () => {
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

    handleTitleChange = (event) => {
        event.persist();
        this.props.setNoteTitle(event.target.value);
    }

    handleShortContentChange = (event) => {
        event.persist();
        this.props.setNoteShortContent(event.target.value);
    }
    
    render() {
        document.addEventListener("mouseup", this.handleMouseUp);
        document.addEventListener("mousemove", this.handleMouseMove);
        return (
            <>

                <div className="note-node" onMouseDown={ this.handleMouseDown } onDoubleClick={ this.handleDoubleClick }>
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
        setNoteBoardId: (boardId) => dispatch(actions.setNoteBoardId(noteId, boardId))
    };
};
   
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteNode);