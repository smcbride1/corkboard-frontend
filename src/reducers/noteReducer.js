export default function noteReducer(
    state = {notes: []}, action
  ) {
    let notes = [...state.notes]
    let index = notes.findIndex(note => note.id === action.id)
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
            notes[index].title = action.title;
            return {
                ...state,
                notes: notes
            }

        case 'SET_NOTE_SHORT_CONTENT':
            notes[index].short_content = action.short_content;
            return {
                ...state,
                notes: notes
            }

        case 'SET_NOTE_LONG_CONTENT':
            notes[index].long_content = action.long_content;
            return {
                ...state,
                notes: notes
            }
            
        case 'SET_NOTE_BOARD_ID':
            notes[index].board_id = action.board_id;
            return {
                ...state,
                notes: notes
            }

        case 'SET_NOTE_X_OFFSET':
            notes[index].x_offset = action.x_offset;
            return {
                ...state,
                notes: notes
            }

        case 'SET_NOTE_Y_OFFSET':
            notes[index].y_offset = action.y_offset;
            return {
                ...state,
                notes: notes
            }

        case 'START_UPDATING_NOTE_REQUEST':
            return {
                ...state,
                updating: true
            }

        case 'FINISH_UPDATE':
            return {
                ...state,
                updating: false
            }

        default:
            return state;
        }
  }