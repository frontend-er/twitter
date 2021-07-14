
import { call, put, takeLatest } from 'redux-saga/effects'
import { setTags, setTagsLoadingState, TagsActionType } from "./actionCreators";
import { LoadingState, Tag } from './contracts/state';
import { TagsApi } from "./../../services/api/tagsAPI";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function* fetchTagsRequest(): Generator<unknown, void, Tag[]> {
   try {
      const items: Tag[] = yield call(TagsApi.fetchTags);
      yield put(setTags(items))
   } catch (error) {
      yield put(setTagsLoadingState(LoadingState.ERROR));
   }
}


export function* tagsSaga() {
   yield takeLatest(TagsActionType.FETCH_TAGS, fetchTagsRequest);
}
