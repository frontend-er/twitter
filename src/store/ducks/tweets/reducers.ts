import produce, { Draft } from 'immer';
import { TweetsActions, TweetsActionType } from './actionCreators';
import { LoadingState, TweetState } from './contracts/state';


const initialtweetsState: TweetState = {
   items: [],
   loadingState: LoadingState.NEVER
}

export const tweetsReducer = produce((daraft: Draft<TweetState>, action: TweetsActions) => {
   switch (action.type) {
      case TweetsActionType.SET_TWEETS:
         daraft.items = action.payload;
         daraft.loadingState = LoadingState.LOADED;
         break;

      case TweetsActionType.FETCH_TWEETS:
         daraft.items = [];
         daraft.loadingState = LoadingState.LOADING;
         break;

      case TweetsActionType.SET_TWEETS_LOADING_STATE:
         daraft.loadingState = action.payload;
         break;


      default:
         return;
   }



}, initialtweetsState)