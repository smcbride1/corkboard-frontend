import React, { Component } from 'react';
import { connect } from 'react-redux';
import Node from './Node.js'

class NoteNode extends Node {
    constructor() {
        super();
        this.state = {
            boardId: 0,
            title: "Title",
            content: "Content"
        }
        this.renderReturnValue =
        <>
            <input type="text" value={this.state.title} onChange={this.handleTitleChange} className="node-title-input"/>
            <br/>
            <hr/>
            <br/>
            <textarea value={this.state.content} onChange={this.handleContentChange} className="node-title-area"/>
        </>
    }
    
    handleDoubleClick = (event) => {
        alert("test2")
    }
}

const mapStateToProps = state => {
    return {
      title: state.title,
      shortContent: state.shortContent,
      longContent: state.longContent,
      boardId: state.boardId
    };
};
   
const mapDispatchToProps = dispatch => {
    return {
      setTitle: (title) => dispatch({ type: 'SET_TITLE', title: title }),
      setShortContent: (shortContent) => dispatch({ type: 'SET_SHORT_CONTENT', shortContent: shortContent }),
      setLongContent: (longContent) => dispatch({ type: 'SET_LONG_CONTENT', longContent: longContent }),
      setBoardId: (boardId) => dispatch({ type: 'SET_BOARD_ID', boardId: boardId })
    };
};
   
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteNode);