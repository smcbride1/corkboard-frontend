export default function noteReducer(
    state = [], action
  ) {
    let id = action.key;
    switch (action.type) {

        case 'START_ADDING_NOTES_REQUEST':
            return {
              ...state,
              requesting: true
            }
       
        case 'ADD_NOTES':
            return {
                ...state,
                notes: action.notes,
                requesting: false
            }

        case 'ADD_NOTE':
            return {
              ...state,
              notes: [...state.notes, action.note]
            }

        case 'SET_TITLE':
            return {
                ...state,
                notes: [...state.notes, state.filter(note => note.id === action.id).title = action.title]
            }

        case 'SET_SHORT_CONTENT':
            return {
                ...state,
                notes: [...state.notes, state.filter(note => note.id === action.id).short_content = action.short_content]
            }

        case 'SET_LONG_CONTENT':
            return {
                ...state,
                notes: [...state.notes, state.filter(note => note.id === action.id).long_content = action.long_content]
            }
            
        case 'SET_BOARD_ID':
            return {
                ...state,
                notes: [...state.notes, state.filter(note => note.id === action.id).board_id = action.board_id]
            }

        default:
            return state;
        }
  }