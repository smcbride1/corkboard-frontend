import React, { Component } from 'react';
import { connect } from 'react-redux';
import Node from './Node.js'

class BoardNode extends Node {
    constructor() {
        super();
        this.state = {
            boardId: 0,
            title: "Title",
            content: "Content"
        }
        this.renderReturnValue = <input type="text" value={this.state.title} onChange={this.handleTitleChange} className="node-title-input"/>
    }

    handleDoubleClick = (event) => {
        alert("test2")
    }
}

const mapStateToProps = state => {
    return {
      name: state.name,
      userId: state.userId,
      boardId: state.boardId
    };
};
   
const mapDispatchToProps = dispatch => {
    return {
      setName: (name) => dispatch({ type: 'SET_NAME', name: name }),
      setUserId: (userId) => dispatch({ type: 'SET_USER_ID', userId: userId }),
      setBoardId: (boardId) => dispatch({ type: 'SET_BOARD_ID', boardId: boardId })
    };
};
   
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardNode);