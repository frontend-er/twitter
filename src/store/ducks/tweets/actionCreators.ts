import { Action } from "redux";
import { LoadingState, Tweet, TweetState } from "./contracts/state";

export enum TweetsActionType {
   SET_TWEETS = 'tweets/SET_TWEETS',
   FETCH_TWEETS = 'tweets/FETCH_TWEETS',
   SET_TWEETS_LOADING_STATE = 'tweets/SET_TWEETS_LOADING_STATE',
   FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
   ADD_TWEET = 'tweets/ADD_TWEET',




}

export interface SetTweetsActionInterface extends Action<TweetsActionType> {
   type: TweetsActionType.SET_TWEETS;
   payload: TweetState['items'];
}


export interface FetchAddTweetsActionInterface extends Action<TweetsActionType> {
   type: TweetsActionType.FETCH_ADD_TWEET;
   payload: string;
}

export interface AddTweetsActionInterface extends Action<TweetsActionType> {
   type: TweetsActionType.ADD_TWEET;
   payload: Tweet[];
}

export interface FetchTweetsActionInterface extends Action<TweetsActionType> {
   type: TweetsActionType.FETCH_TWEETS;
}

export interface SetTweetsLoadingStateActionInterface extends Action<TweetsActionType> {
   type: TweetsActionType.SET_TWEETS_LOADING_STATE;
   payload: LoadingState;

}


export const setTweets = (payload: TweetState['items']): SetTweetsActionInterface => ({
   type: TweetsActionType.SET_TWEETS,
   payload,
});


export const fetchAddTweets = (payload: string): FetchAddTweetsActionInterface => ({
   type: TweetsActionType.FETCH_ADD_TWEET,
   payload,
});

export const addTweets = (payload: Tweet[]): AddTweetsActionInterface => ({
   type: TweetsActionType.ADD_TWEET,
   payload,
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
   type: TweetsActionType.FETCH_TWEETS,
});



export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionInterface => ({
   type: TweetsActionType.SET_TWEETS_LOADING_STATE,
   payload,

});



export type TweetsActions = SetTweetsActionInterface | FetchTweetsActionInterface | SetTweetsLoadingStateActionInterface;