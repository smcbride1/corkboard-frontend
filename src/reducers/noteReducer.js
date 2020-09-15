export default function noteReducer(
    // state = {
    //   title: "",
    //   short_content: "",
    //   long_content: "",
    //   board_id: null
    // },
    // action
    state = [], action
  ) {
    let id = action.key;
    switch (action.type) {
        case 'CREATE_NOTE':
            return {
              ...state,
              notes: [...state.notes],
              requesting: true
            }

        case 'START_ADDING_NOTES_REQUEST':
            return {
              ...state,
              notes: [...state.notes],
              requesting: true
            }
       
        case 'ADD_NOTES':
            return {
              ...state,
              notes: action.notes,
              requesting: false
            }

        case 'SET_TITLE':
            return {
                ...state,
                id: {...state[id],
                title: action.title}
            }

        case 'SET_SHORT_CONTENT':
            return {
                ...state,
                id: {...state[id],
                shortContent: action.shortContent}
            }

        case 'SET_LONG_CONTENT':
            return {
                ...state,
                id: {...state[id],
                longContent: action.longContent}
            }
            
        case 'SET_BOARD_ID':
            return {
                ...state,
                id: {...state[id],
                boardId: action.boardId}
            }

        default:
            return state;
        }
  }