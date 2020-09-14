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
    switch (action.type) {
        case 'SET_TITLE':
            return {
                ...state,
                title: action.title
            }

        case 'SET_SHORT_CONTENT':
            return {
                ...state,
                short_content: action.shortContent
            }

        case 'SET_LONG_CONTENT':
            return {
                ...state,
                long_content: action.longContet
            }
            
        case 'SET_BOARD_ID':
            return {
                ...state,
                board_id: action.boardId
            }

        default:
            return state;
        }
  }