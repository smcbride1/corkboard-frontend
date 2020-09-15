//BOARDS
const SET_NAME = "SET_NAME"
const SET_USER_ID = "SET_USER_ID"

export function setName(name) {
    return { type: SET_NAME, name: name }
}

export function setUserId(userId) {
    return { type: SET_USER_ID, userId: userId }
}

//NOTES
const SET_ID = "SET_ID"
const SET_TITLE = "SET_TITLE"
const SET_SHORT_CONTENT = "SET_SHORT_CONTENT"
const SET_LONG_CONTENT = "SET_LONG_CONTENT"
const SET_BOARD_ID = "SET_BOARD_ID"

export function setName(name) {
    return { type: SET_ID, name: name }
}

export function setUserId(userId) {
    return { type: SET_TITLE, userId: userId }
}

export function setBoardId(boardId) {
    return { type: SET_SHORT_CONTENT, boardId: boardId }
}

export function setBoardId(boardId) {
    return { type: SET_LONG_CONTENT, boardId: boardId }
}

export function setBoardId(boardId) {
    return { type: SET_BOARD_ID, boardId: boardId }
}

//USERS
const SET_NAME = "SET_NAME"
const SET_EMAIL = "SET_EMAIL"

export function setName(name) {
    return { type: SET_NAME, name: name }
}

export function setEmail(email) {
    return { type: SET_EMAIL, email: email }
}