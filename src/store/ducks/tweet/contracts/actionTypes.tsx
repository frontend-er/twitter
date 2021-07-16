import { Action } from "redux";
import { Tweet } from "../../tweets/contracts/state";
import { LoadingState } from "./state";

export enum TweetActionType {
   SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
   FETCH_TWEET_DATA = 'tweet/FETCH_TWEET_DATA',
   SET_TAGS_LOADING_STATE = 'tweet/SET_TAGS_LOADING_STATE',
}

export interface SetTweetDataActionInterface extends Action<TweetActionType> {
   type: TweetActionType.SET_TWEET_DATA;
   payload: Tweet;
}



export interface FetchTweetActionInterface extends Action<TweetActionType> {
   type: TweetActionType.FETCH_TWEET_DATA;
   payload: string;
}

export interface SetTweetLoadingStateActionInterface extends Action<TweetActionType> {
   type: TweetActionType.SET_TAGS_LOADING_STATE;
   payload: LoadingState;

}