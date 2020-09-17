export default function boardReducer(
    state = {boards: []}, action
  ) {
    let id = action.key;
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

      case 'SET_NAME':
        return {
          ...state,
          boards: [...state.boards, state.filter(board => board.id === action.id).name = action.name]
        }

      case 'SET_USER_ID':
        return {
          ...state,
          boards: [...state.boards, state.filter(board => board.id === action.id).userId = action.userId]
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