export function fetchBoards() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_BOARDS_REQUEST' });
      fetch(`http://localhost:4000/boards`)
        .then(response => response.json())
        .then(boards => dispatch({ type: 'ADD_BOARDS', boards }));
    };
  }