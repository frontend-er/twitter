import produce, { Draft } from 'immer';
import { TweetsActions, TweetsActionType } from './actionCreators';
import { AddFormState, LoadingState, TweetState } from './contracts/state';


const initialtweetsState: TweetState = {
   items: [],
   addFormState: AddFormState.NEVER,
   loadingState: LoadingState.NEVER,

}

export const tweetsReducer = produce((draft: Draft<TweetState>, action: TweetsActions) => {
   switch (action.type) {
      case TweetsActionType.SET_TWEETS:
         draft.items = action.payload;
         draft.loadingState = LoadingState.LOADED;
         break;

      case TweetsActionType.FETCH_TWEETS:
         draft.items = [];
         draft.loadingState = LoadingState.LOADING;
         break;

      case TweetsActionType.SET_TWEETS_LOADING_STATE:
         draft.loadingState = action.payload;
         break;


      default:
         break;
   }
}, initialtweetsState);
