export function fetchBoard(boardId) {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_BOARDS_REQUEST' });
      fetch(`http://localhost:4000/board/${boardId}`)
        .then(response => response.json())
        .then(board => dispatch({ type: 'ADD_BOARD', board }));
    };
  }