import produce, { Draft } from 'immer';
import { TweetActions } from './actionCreators';
import { TweetActionType } from './contracts/actionTypes';
import { FullTweetState, LoadingState } from './contracts/state';




const initialTweetState: FullTweetState = {
   data: undefined,
   loadingState: LoadingState.NEVER
}

export const tweetReducer = produce((daraft: Draft<FullTweetState>, action: TweetActions) => {
   switch (action.type) {
      case TweetActionType.SET_TWEET_DATA:
         daraft.data = action.payload;
         daraft.loadingState = LoadingState.LOADED;
         break;

      case TweetActionType.FETCH_TWEET_DATA:
         daraft.data = undefined;
         daraft.loadingState = LoadingState.LOADING;
         break;

      case TweetActionType.SET_TAGS_LOADING_STATE:
         daraft.loadingState = action.payload;
         break;


      default:
         return;
   }



}, initialTweetState)