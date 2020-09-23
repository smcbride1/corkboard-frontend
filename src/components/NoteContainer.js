import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteNode from './NoteNode.js'
import * as actions from '../actions.js'

export class NoteContainer extends Component {
    componentDidMount() {
        this.props.fetchNotes(this.props.boardId);
    }

    render() {
        return (
            <div id="note-container">
                {this.props.notes.map(note => <NoteNode key={note.id} id={`note-${note.id}`}/>)}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let boardId = ownProps.boardId;
    return {
        boardId: boardId,
        notes: state.note.notes,
        user: state.user
    };
};
   
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchNotes: (boardId) => dispatch(actions.fetchNotes(boardId))
    };
};
   
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteContainer);