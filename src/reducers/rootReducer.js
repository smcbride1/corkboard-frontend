import { combineReducers } from "redux";

import boardReducer from './boardReducer';
import noteReducer from './noteReducer';
import userReducer from './userReducer';
 
export const rootReducer = combineReducers({
  board: boardReducer,
  note: noteReducer,
  user: userReducer
})