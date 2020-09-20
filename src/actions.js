//BOARDS
const ADD_BOARD = "ADD_BOARD"
const SET_BOARDS = "SET_BOARDS"
const SET_BOARD_NAME = "SET_BOARD_NAME"
const SET_CURRENT_BOARD = "SET_CURRENT_BOARD"
const START_CREATING_BOARD_REQUEST = "START_CREATING_BOARD_REQUEST"
const START_FETCHING_BOARDS_REQUEST = "START_FETCHING_BOARDS_REQUEST"
const START_UPDATING_BOARD_REQUEST = "START_UPDATING_BOARD_REQUEST"
const FINISH_BOARD_UPDATE = "FINISH_BOARD_UPDATE"
const START_DESTROYING_BOARD_REQUEST = "START_DESTROYING_BOARD_REQUEST"
const REMOVE_BOARD = "REMOVE_BOARD"

export function createBoard(userId) {
    let formData = new FormData();
    formData.append('board[user_id]', userId);

    return (dispatch) => {
      dispatch({ type: START_CREATING_BOARD_REQUEST });
      fetch(`http://localhost:4000/boards`, {
          credentials: 'include',
          method: 'post',
          body: formData
      })
        .then(response => response.json())
        .then(board => dispatch(addBoard(board)));
    };
}

export function fetchBoards(userId) {
    return (dispatch) => {
      dispatch({ type: START_FETCHING_BOARDS_REQUEST });
      fetch(`http://localhost:4000/users/${userId}/boards`, {
          credentials: 'include'
      })
        .then(response => response.json())
        .then(boards => dispatch(setBoards(boards)));
    };
}

export function setBoards(boards) {
    return { type: SET_BOARDS, boards: boards }
}

export function addBoard(board) {
    return { type: ADD_BOARD, board: board }
}

export function setBoardName(id, name) {
    return { type: SET_BOARD_NAME, id: id, name: name }
}

export function updateBoard(board) {
    let formData = new FormData();
    for (let key in board) {
        formData.append(`board[${key}]`, board[key]);
    }

    return (dispatch) => {
      dispatch({ type: START_UPDATING_BOARD_REQUEST });
      fetch(`http://localhost:4000/boards/${board.id}`, {
          credentials: 'include',
          method: 'put',
          body: formData
      })
        .then(response => response.json())
        .then(board => dispatch(finishBoardUpdate()));
    };
}

export function finishBoardUpdate() {
    return { type: FINISH_BOARD_UPDATE }
}

export function destroyBoard(board) {
    return (dispatch) => {
      dispatch({ type: START_DESTROYING_BOARD_REQUEST });
      fetch(`http://localhost:4000/boards/${board.id}`, {
          credentials: 'include',
          method: 'delete',
      })
    };
}

export function removeBoard(board) {
    return { type: REMOVE_BOARD, id: board.id }
}

export function setCurrentBoard(id) {
    return { type: SET_CURRENT_BOARD, id: id }
}

//NOTES
const ADD_NOTE = "ADD_NOTE"
const SET_NOTE_TITLE = "SET_NOTE_TITLE"
const SET_NOTE_SHORT_CONTENT = "SET_NOTE_SHORT_CONTENT"
const SET_NOTE_LONG_CONTENT = "SET_NOTE_LONG_CONTENT"
const SET_NOTE_BOARD_ID = "SET_NOTE_BOARD_ID"
const SET_NOTE_X_OFFSET = "SET_NOTE_X_OFFSET"
const SET_NOTE_Y_OFFSET = "SET_NOTE_Y_OFFSET"
const START_CREATING_NOTE_REQUEST = "START_CREATING_NOTE_REQUEST"
const START_FETCHING_NOTES_REQUEST = "START_FETCHING_NOTES_REQUEST"
const START_UPDATING_NOTE_REQUEST = "START_UPDATING_NOTE_REQUEST"
const FINISH_NOTE_UPDATE = "FINISH_NOTE_UPDATE"
const START_DESTROYING_NOTE_REQUEST = "START_DESTROYING_NOTE_REQUEST"
const REMOVE_NOTE = "REMOVE_NOTE"
const SET_SELECTED_NOTE = "SET_SELECTED_NOTE"
const UNSELECT_NOTE = "UNSELECT_NOTE"

export function createNote(boardId) {
    let formData = new FormData();
    formData.append('note[board_id]', boardId);

    return (dispatch) => {
      dispatch({ type: START_CREATING_NOTE_REQUEST });
      fetch(`http://localhost:4000/notes`, {
          credentials: 'include',
          method: 'post',
          body: formData
      })
        .then(response => response.json())
        .then(note => dispatch(addNote(note)));
    };
}

export function fetchNotes(boardId) {
    return (dispatch) => {
      dispatch({ type: START_FETCHING_NOTES_REQUEST });
      fetch(`http://localhost:4000/boards/${boardId}/notes`)
        .then(response => response.json())
        .then(notes => dispatch({ type: 'ADD_NOTES', notes }));
    };
  }

export function addNote(note) {
    return { type: ADD_NOTE, note: note }
}

export function setNoteTitle(id, title) {
    return { type: SET_NOTE_TITLE, id: id, title: title }
}

export function setNoteShortContent(id, short_content) {
    return { type: SET_NOTE_SHORT_CONTENT, id: id, short_content: short_content }
}

export function setNoteLongContent(id, long_content) {
    return { type: SET_NOTE_LONG_CONTENT, id: id, long_content: long_content }
}

export function setNoteBoardId(id, board_id) {
    return { type: SET_NOTE_BOARD_ID, id: id, board_id: board_id }
}

export function setNoteXOffset(id, x_offset) {
    return { type: SET_NOTE_X_OFFSET, id: id, x_offset: x_offset }
}

export function setNoteYOffset(id, y_offset) {
    return { type: SET_NOTE_Y_OFFSET, id: id, y_offset: y_offset }
}

export function updateNote(note) {
    let formData = new FormData();
    for (let key in note) {
        formData.append(`note[${key}]`, note[key]);
    }

    return (dispatch) => {
      dispatch({ type: START_UPDATING_NOTE_REQUEST });
      fetch(`http://localhost:4000/notes/${note.id}`, {
          credentials: 'include',
          method: 'put',
          body: formData
      })
        .then(response => response.json())
        .then(note => dispatch(finishNoteUpdate()));
    };
}

export function finishNoteUpdate() {
    return { type: FINISH_NOTE_UPDATE }
}

export function destroyNote(note) {
    return (dispatch) => {
      dispatch({ type: START_DESTROYING_NOTE_REQUEST });
      fetch(`http://localhost:4000/notes/${note.id}`, {
          credentials: 'include',
          method: 'delete',
      })
    };
}

export function removeNote(note) {
    return { type: REMOVE_NOTE, id: note.id }
}

export function setSelectedNote(id) {
    return { type: SET_SELECTED_NOTE, id: id }
}

export function unselectNote() {
    return { type: UNSELECT_NOTE }
}

//USERS
const SET_USER_NAME = "SET_USER_NAME"
const SET_USER_EMAIL = "SET_USER_EMAIL"
const SET_USER = "SET_USER"
const SET_LOGGED_IN = "SET_LOGGED_IN"

export function setUser(user) {
    return { type: SET_USER, user: user }
}

export function setUserName(name) {
    return { type: SET_USER_NAME, name: name }
}

export function setUserEmail(email) {
    return { type: SET_USER_EMAIL, email: email }
}

export function setLoggedIn(loggedIn) {
    return { type: SET_LOGGED_IN, loggedIn: loggedIn }
}