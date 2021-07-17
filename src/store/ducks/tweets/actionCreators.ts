import { SetTweetsActionInterface, FetchAddTweetsActionInterface, AddTweetsActionInterface, FetchTweetsActionInterface, SetTweetsLoadingStateActionInterface, SetAddFormStateActionInterface } from "./contracts/actoinsTypes";
import { AddFormState, LoadingState, Tweet, TweetState } from "./contracts/state";

export enum TweetsActionType {
   SET_TWEETS = 'tweets/SET_TWEETS',
   FETCH_TWEETS = 'tweets/FETCH_TWEETS',
   SET_TWEETS_LOADING_STATE = 'tweets/SET_TWEETS_LOADING_STATE',
   FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
   ADD_TWEET = 'tweets/ADD_TWEET',
   SET_ADD_FORM_STATE = 'tweets/SET_ADD_FORM_STATE'




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

export const setAddFormState = (payload: AddFormState): SetAddFormStateActionInterface => ({
   type: TweetsActionType.SET_ADD_FORM_STATE,
   payload,
});





export type TweetsActions = SetTweetsActionInterface | FetchTweetsActionInterface | SetTweetsLoadingStateActionInterface;