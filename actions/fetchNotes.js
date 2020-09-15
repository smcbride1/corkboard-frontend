export function fetchNotes(boardId) {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_NOTES_REQUEST' });
      fetch(`http://localhost:4000/boards/${boardId}/notes`)
        .then(response => response.json())
        .then(notes => dispatch({ type: 'ADD_NOTES', notes }));
    };
  }