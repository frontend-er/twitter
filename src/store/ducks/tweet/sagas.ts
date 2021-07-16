
import { call, put, takeLatest } from 'redux-saga/effects'
import { setTweetData, setTweetLoadingState } from "./actionCreators";
import { LoadingState } from './contracts/state';
import { TweetsApi } from '../../../services/api/tweetsAPI';
import { FetchTweetActionInterface, TweetActionType } from './contracts/actionTypes';
import { Tweet } from '../tweets/contracts/state';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function* fetchTagsRequest({ payload: tweetId }: FetchTweetActionInterface): Generator<unknown, void, Tweet[]> {
   try {
      const data: Tweet[] = yield call(TweetsApi.fetchTweetData, tweetId);
      yield put(setTweetData(data[0]))
   } catch (error) {
      yield put(setTweetLoadingState(LoadingState.ERROR));
   }
}


export function* tweetSaga() {
   yield takeLatest(TweetActionType.FETCH_TWEET_DATA, fetchTagsRequest);
}