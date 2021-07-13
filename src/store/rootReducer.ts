import { combineReducers } from "redux";
import { tweetsReducer } from "./ducks/tweets/reducers";

export const rootReducer = combineReducers({
   tweets: tweetsReducer,
})