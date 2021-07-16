import { combineReducers } from "redux";
import { tagsReducer } from "./ducks/tags/reducers";
import { tweetReducer } from "./ducks/tweet/reducers";
import { tweetsReducer } from "./ducks/tweets/reducers";



export const rootReducer = combineReducers({
   tweets: tweetsReducer,
   tags: tagsReducer,
   tweet: tweetReducer,
})