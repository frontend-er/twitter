import { Action } from "redux";
import { TweetsActionType } from "../actionCreators";
import { TweetState, Tweet, LoadingState, AddFormState } from "./state";

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

export interface SetAddFormStateActionInterface extends Action<TweetsActionType> {
   type: TweetsActionType.SET_ADD_FORM_STATE;
   payload: AddFormState;
}