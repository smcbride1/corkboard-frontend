export default function userReducer(
    // state = {
    //   name: "",
    //   email: ""
    // },
    // action
    state = [], action
  ) {
    switch (action.type) {
        case 'SET_USER':
            return {
            ...state,
            id: action.user.id,
            name: action.user.name,
            email: action.user.email
            }

        case 'SET_NAME':
            return {
            ...state,
            name: action.name
            }

        case 'SET_EMAIL':
            return {
            ...state,
            email: action.email
            }
        
        case 'SET_LOGGED_IN':
            return {
            ...state,
            loggedIn: action.loggedIn
            }

        default:
            return state;
        }
  }