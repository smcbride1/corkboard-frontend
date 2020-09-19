export default function boardReducer(
    state = {boards: []}, action
  ) {
    let boards = [...state.boards]
    let index = boards.findIndex(board => board.id === action.id)
    switch (action.type) {

      case 'START_CREATING_BOARD_REQUEST':
          return {
            ...state,
            boards: [...state.boards],
            requesting: true
          }

      case 'START_FETCHING_BOARDS_REQUEST':
          return {
            ...state,
            boards: [...state.boards],
            requesting: true
          }
    
      case 'SET_BOARDS':
          return {
              ...state,
              boards: action.boards,
              requesting: false
          }

      case 'ADD_BOARD':
          return {
            ...state,
            boards: [...state.boards, action.board]
          }

      case 'SET_BOARD_NAME':
        boards[index].name = action.name;
        return {
            ...state,
            boards: boards
        }

      case 'START_UPDATING_BOARD_REQUEST':
        return {
            ...state,
            updating: true
        }

      case 'FINISH_BOARD_UPDATE':
        return {
            ...state,
            updating: false
        }
          
      case 'START_DESTROYING_BOARD_REQUEST':
        return {
            ...state,
            updating: false
        }

      case 'REMOVE_BOARD':
        boards.splice(index, 1)
        return {
            ...state,
            boards: boards
        }

      case 'SET_CURRENT_BOARD':
        return {
          ...state,
          boards: [...state.boards],
          currentBoard: action.id
        }

      default:
        return state;
    }
  }