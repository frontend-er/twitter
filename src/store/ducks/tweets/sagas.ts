
import { call, put, takeLatest } from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsAPI';
import { addTweets, setAddFormState, setTweets, setTweetsLoadingState, TweetsActionType } from "./actionCreators";
import { FetchAddTweetsActionInterface } from './contracts/actoinsTypes';
import { AddFormState, LoadingState, Tweet } from './contracts/state';

export function* fetchTweetsRequest(): Generator<unknown, void, Tweet[]> {
   try {
      const items: Tweet[] = yield call(TweetsApi.fetchTweets);
      yield put(setTweets(items))
   } catch (error) {
      yield put(setTweetsLoadingState(LoadingState.ERROR));
   }
}

export function* fetchAddTweetRequest({ payload }: FetchAddTweetsActionInterface): Generator<unknown, void, Tweet> {
   try {
      const data: Tweet = {
         _id: Math.random().toString(36).substr(2),
         text: payload,
         user: {
            fullName: 'Brian Vaughn 🖤',
            username: 'brian_d_vaughn',
            avatarUrl: 'https://pbs.twimg.com/profile_images/1290320630521487362/UKVSbU2V_bigger.jpg',
         },
      };
      const item = yield call(TweetsApi.addTweet, data);
      yield put(addTweets(item));
   } catch (error) {
      yield put(setAddFormState(AddFormState.ERROR));

   }
}

export function* tweetsSaga() {
   yield takeLatest(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest);
   yield takeLatest(TweetsActionType.FETCH_ADD_TWEET, fetchAddTweetRequest);

}
