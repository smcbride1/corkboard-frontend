export function fetchNote(noteId) {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_NOTE_REQUEST' });
      fetch(`http://localhost:4000/notes/${noteId}`)
        .then(response => response.json())
        .then(note => dispatch({ type: 'ADD_NOTE', note }));
    };
  }