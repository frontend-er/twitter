import { createSelector } from "reselect";
import { RootState } from "../../store";
import { LoadingState, TweetState } from "./contracts/state";


export const selectTweets = (state: RootState): TweetState => state.tweets;

export const selectLoadingState = (state: RootState): LoadingState => selectTweets(state).loadingState;

export const selectIsTweetsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED;



export const selectTweetsItems = createSelector(selectTweets, (tweets) => tweets.items);



