import { combineReducers } from "redux";
import { tweetsReducer } from "./ducks/tweets/reducers";
import { tagsReducer } from "./tags/reducers";

export const rootReducer = combineReducers({
   tweets: tweetsReducer,
   tags: tagsReducer,
})