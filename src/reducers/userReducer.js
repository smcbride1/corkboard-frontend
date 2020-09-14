export default function userReducer(
    // state = {
    //   name: "",
    //   email: ""
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

        case 'SET_EMAIL':
            return {
            ...state,
            email: action.email
            }

        default:
            return state;
        }
  }