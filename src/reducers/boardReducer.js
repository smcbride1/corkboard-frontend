export default function boardReducer(
    // state = {
    //   name: "",
    //   user_id: null,
    //   board_id: null
    // },
    // action
    state = [], action
  ) {
    switch (action.type) {
      case 'SET_NAME':
        return {
          ...state,
          name: action.name
        }

      case 'SET_USER_ID':
        return {
          ...state,
          user: action.userId
        }

      default:
        return state;
    }
  }