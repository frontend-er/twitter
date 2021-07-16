import { Tweet } from "../tweets/contracts/state";
import { SetTweetDataActionInterface, TweetActionType, FetchTweetActionInterface, SetTweetLoadingStateActionInterface } from "./contracts/actionTypes";
import { LoadingState } from "./contracts/state";




export const setTweetData = (payload: Tweet): SetTweetDataActionInterface => ({
   type: TweetActionType.SET_TWEET_DATA,
   payload,
});

export const fetchTweet = (payload: string): FetchTweetActionInterface => ({
   type: TweetActionType.FETCH_TWEET_DATA,
   payload,
});


export const setTweetLoadingState = (payload: LoadingState): SetTweetLoadingStateActionInterface => ({
   type: TweetActionType.SET_TAGS_LOADING_STATE,
   payload,

});



export type TweetActions = SetTweetDataActionInterface | FetchTweetActionInterface | SetTweetLoadingStateActionInterface;