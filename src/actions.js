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

export function setBoardUserId(userId) {
    return { type: SET_BOARD_USER_ID, userId: userId }
}

export function setBoardName(name) {
    return { type: SET_BOARD_NAME, name: name }
}

//NOTES
const ADD_NOTE = "ADD_NOTE"
const CREATE_NOTE = "CREATE_NOTE"
const SET_NOTE_TITLE = "SET_NOTE_TITLE"
const SET_NOTE_SHORT_CONTENT = "SET_NOTE_SHORT_CONTENT"
const SET_NOTE_LONG_CONTENT = "SET_NOTE_LONG_CONTENT"
const SET_NOTE_BOARD_ID = "SET_NOTE_BOARD_ID"

export function addNote(note) {
    return { type: ADD_NOTE, note: note }
}

export function createNote() {
    return { type: CREATE_NOTE }
}

export function setNoteTitle(title) {
    return { type: SET_NOTE_TITLE, title: title }
}

export function setNoteShortContent(shortContent) {
    return { type: SET_NOTE_SHORT_CONTENT, shortContent: shortContent }
}

export function setNoteLongContent(longContent) {
    return { type: SET_NOTE_LONG_CONTENT, longContent: longContent }
}

export function setNoteBoardId(boardId) {
    return { type: SET_NOTE_BOARD_ID, boardId: boardId }
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