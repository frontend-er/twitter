import { LoadingState, FullTweetState } from "./contracts/state";
import { RootState } from "./../../store";

export const selectTweet = (state: RootState): FullTweetState => state.tweet;

export const selectLoadingState = (state: RootState): LoadingState => selectTweet(state).loadingState;

export const selectIsTweetLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED;



export const selectTweetData = (state: RootState): FullTweetState['data'] => selectTweet(state).data;



