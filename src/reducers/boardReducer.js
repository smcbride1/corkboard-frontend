export default function boardReducer(
    state = [], action
  ) {
    switch (action.type) {
      case 'CREATE_BOARD':
        return {
          ...state,
          boards: [...state.boards],
          requesting: true
        }

    case 'START_ADDING_BOARDS_REQUEST':
        return {
          ...state,
          boards: [...state.boards],
          requesting: true
        }
   
    case 'ADD_BOARDS':
        return {
            ...state,
            boards: [...state.boards, action.boards],
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
          boards: [...state.boards, state.filter(board => board.id === action.id).user_id = action.user_id]
        }

      default:
        return state;
    }
  }