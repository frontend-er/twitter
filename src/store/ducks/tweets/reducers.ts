import produce, { Draft } from 'immer';
import { TweetsActions, TweetsActionType } from './actionCreators';
import { AddFormState, LoadingState, TweetState } from './contracts/state';


const initialtweetsState: TweetState = {
   items: [],
   loadingState: LoadingState.NEVER,
   addFormState: AddFormState.NEVER,

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


      case TweetsActionType.SET_ADD_FORM_STATE:
         draft.addFormState = action.payload;
         break;

      case TweetsActionType.FETCH_ADD_TWEET:
         draft.addFormState = AddFormState.LOADING;
         break;

      case TweetsActionType.ADD_TWEET:
         draft.items.splice(0, 0, action.payload);
         draft.addFormState = AddFormState.NEVER;

         break;


      default:
         break;
   }
}, initialtweetsState);
