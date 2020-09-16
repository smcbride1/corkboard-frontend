//BOARDS
const ADD_BOARD = "ADD_BOARD"
const CREATE_BOARD = "CREATE_BOARD"
const SET_BOARD_NAME = "SET_BOARD_NAME"
const SET_BOARD_USER_ID = "SET_BOARD_USER_ID"

export function addBoard(board) {
    return { type: ADD_BOARD, board: board }
}

export function createBoard() {
    return { type: CREATE_BOARD }
}

export function setBoardUserId(id, userId) {
    return { type: SET_BOARD_USER_ID, id: id, userId: userId }
}

export function setBoardName(id, name) {
    return { type: SET_BOARD_NAME, id: id, name: name }
}

//NOTES
const ADD_NOTE = "ADD_NOTE"
const SET_NOTE_TITLE = "SET_NOTE_TITLE"
const SET_NOTE_SHORT_CONTENT = "SET_NOTE_SHORT_CONTENT"
const SET_NOTE_LONG_CONTENT = "SET_NOTE_LONG_CONTENT"
const SET_NOTE_BOARD_ID = "SET_NOTE_BOARD_ID"

export function createNote(userId, boardId) {
    let formData = new FormData();
    formData.append('user_id', userId);
    formData.append('board_id', boardId);

    return (dispatch) => {
      dispatch({ type: 'START_CREATING_NOTE_REQUEST' });
      fetch(`http://localhost:4000/notes`, {
          credentials: 'include',
          method: 'post',
          body: formData
      })
        .then(response => response.json())
        .then(note => dispatch(addNote(note)));
    };
}

export function addNote(note) {
    return { type: ADD_NOTE, note: note }
}

export function setNoteTitle(id, title) {
    return { type: SET_NOTE_TITLE, id: id, title: title }
}

export function setNoteShortContent(id, shortContent) {
    return { type: SET_NOTE_SHORT_CONTENT, id: id, shortContent: shortContent }
}

export function setNoteLongContent(id, longContent) {
    return { type: SET_NOTE_LONG_CONTENT, id: id, longContent: longContent }
}

export function setNoteBoardId(id, boardId) {
    return { type: SET_NOTE_BOARD_ID, id: id, boardId: boardId }
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