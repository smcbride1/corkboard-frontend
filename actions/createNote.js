export function createNote() {
    let formData = new FormData();
    formData.append('user_id', this.state.user.userId);--
    formData.append('board_id', this.state.board);--

    return (dispatch) => {
      dispatch({ type: 'START_CREATING_NOTE_REQUEST' });
      fetch(`http://localhost:4000/notes`, {
          credentials: 'include',
          method: 'post',
          body: formData
      })
        .then(response => response.json())
        .then(board => dispatch({ type: 'ADD_BOARD', board }));
    };
  }