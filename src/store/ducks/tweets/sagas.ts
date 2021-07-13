import axios from 'axios';

import { call, put, takeLatest } from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsAPI';
import { setTweets, setTweetsLoadingState, TweetsActionType } from "./actionCreators";
import { LoadingState, Tweet, TweetState } from './contracts/state';


// worker Saga: will be fired on USER_FETCH_REQUESTED actions

export function* fetchTweetsRequest(): Generator<unknown, void, Tweet[]> {
   try {
      const items: Tweet[] = yield call(TweetsApi.fetchTweets);
      yield put(setTweets(items))
   } catch (error) {
      yield put(setTweetsLoadingState(LoadingState.ERROR));
   }
}


export function* tweetsSaga() {
   yield takeLatest(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest);
}
