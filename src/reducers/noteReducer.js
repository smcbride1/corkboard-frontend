export default function noteReducer(
    state = {notes: []}, action
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

        case 'SET_NOTE_TITLE':
            let notes = [...state.notes]
            let index = notes.findIndex(note => note.id === action.id)
            notes[index].title = action.title;
            return {
                ...state,
                notes: [notes[0]]
            }

        case 'SET_NOTE_SHORT_CONTENT':
            return {
                ...state,
                notes: [...state.notes, state.notes.find(note => note.id === action.id).short_content = action.short_content]
            }

        case 'SET_NOTE_LONG_CONTENT':
            return {
                ...state,
                notes: [...state.notes, state.notes.find(note => note.id === action.id).long_content = action.long_content]
            }
            
        case 'SET_NOTE_BOARD_ID':
            return {
                ...state,
                notes: [...state.notes, state.notes.find(note => note.id === action.id).board_id = action.board_id]
            }

        default:
            return state;
        }
  }