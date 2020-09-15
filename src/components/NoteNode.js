import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteNode extends Node {
    constructor() {
        super();
        // this.state = {
        //     boardId: 0,
        //     title: "Title",
        //     content: "Content"
        // }
        this.mouseEvent = null;
        this.renderReturnValue =
        <>
            <input type="text" value={this.state.title} onChange={this.handleTitleChange} className="node-title-input"/>
            <br/>
            <hr/>
            <br/>
            <textarea value={this.state.content} onChange={this.handleContentChange} className="node-title-area"/>
        </>
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
            this.mouseEvent.target.style["left"] = `${event.pageX - 10}px`;
            this.mouseEvent.target.style["top"] = `${event.pageY - 10}px`;
        }
    }
    
    handleDoubleClick = (event) => {
        alert("test2")
    }

    handleTitleChange = (event) => {
        event.persist()
        this.setState((prevState, props) => ({...prevState, title: event.target.value}))
    }

    handleContentChange = (event) => {
        event.persist()
        this.setState((prevState, props) => ({...prevState, content: event.target.value}))
    }
    
    render() {
        document.addEventListener("mouseup", this.handleMouseUp);
        document.addEventListener("mousemove", this.handleMouseMove);
        return (
            <>
                <div className="board-node" 
                    onMouseDown={ this.handleMouseDown } 
                    onDoubleClick={ this.handleDoubleClick }>
                    {this.renderReturnValue}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let myState = state[ownProps.key]
    return {
        key: myState.id,
        title: myState.title,
        shortContent: myState.shortContent,
        longContent: myState.longContent,
        boardId: myState.boardId
    };
};
   
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setTitle: (title) => dispatch({ type: 'SET_TITLE', id: ownProps.id, title: title }),
        setShortContent: (shortContent) => dispatch({ type: 'SET_SHORT_CONTENT', id: ownProps.id, shortContent: shortContent }),
        setLongContent: (longContent) => dispatch({ type: 'SET_LONG_CONTENT', id: ownProps.id, longContent: longContent }),
        setBoardId: (boardId) => dispatch({ type: 'SET_BOARD_ID', id: ownProps.id, boardId: boardId })
    };
};
   
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteNode);